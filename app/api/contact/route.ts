import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { contactFormSchema } from '@/lib/validations'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitResult = await checkRateLimit(request)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Get client IP and user agent
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const cfConnectingIp = request.headers.get('cf-connecting-ip')
    
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
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Parse and validate form data
    const formData = await request.formData()
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || undefined,
      message: formData.get('message') as string,
    }

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(data)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        ...validationResult.data,
        ipAddress: ip,
        userAgent,
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        remainingRequests: rateLimitResult.remainingPoints 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
