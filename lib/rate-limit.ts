// Simple in-memory rate limiter
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_REQUESTS = 5

export async function checkRateLimit(req: Request): Promise<{ success: boolean; remainingPoints: number }> {
  const forwarded = req.headers.get('x-forwarded-for')
  const realIp = req.headers.get('x-real-ip')
  const cfConnectingIp = req.headers.get('cf-connecting-ip')
  
  let ip = 'unknown'
  if (cfConnectingIp) {
    ip = cfConnectingIp
  } else if (realIp) {
    ip = realIp
  } else if (forwarded) {
    ip = forwarded.split(',')[0].trim()
  }
  
  // Filter out localhost and private IPs
  if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    ip = 'unknown'
  }

  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitStore.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return { success: true, remainingPoints: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { success: false, remainingPoints: 0 }
  }

  // Increment count
  record.count++
  rateLimitStore.set(ip, record)
  
  return { success: true, remainingPoints: MAX_REQUESTS - record.count }
}
