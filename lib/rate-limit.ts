import { RateLimiterMemory } from 'rate-limiter-flexible'

const rateLimiter = new RateLimiterMemory({
  keyGenerator: (req) => {
    // Use IP address for rate limiting
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? (Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0]) : req.socket.remoteAddress
    return ip || 'unknown'
  },
  points: 5, // Number of requests
  duration: 15 * 60, // Per 15 minutes
})

export async function checkRateLimit(req: Request): Promise<{ success: boolean; remainingPoints: number }> {
  try {
    const result = await rateLimiter.consume(req)
    return {
      success: true,
      remainingPoints: result.remainingPoints,
    }
  } catch (error: any) {
    return {
      success: false,
      remainingPoints: 0,
    }
  }
}
