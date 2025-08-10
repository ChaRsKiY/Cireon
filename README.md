# Cireon - Digital Studio Landing Page

A modern, responsive landing page for Cireon digital studio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 📱 **Responsive** - Optimized for all devices and screen sizes
- 🌙 **Dark Mode** - Built-in theme switching with next-themes
- ⚡ **Performance** - Optimized with Next.js 15 and Tailwind CSS v4
- 📊 **Analytics Ready** - Contact form with MongoDB integration
- 🛡️ **Security** - Rate limiting and validation protection
- 🎭 **Animations** - Smooth micro-interactions with Framer Motion

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Database**: MongoDB with Prisma ORM
- **Validation**: Zod
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cireon-dev-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="mongodb://localhost:27017/cireon"
   
   # Rate limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=5
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   ├── contact-form.tsx  # Contact form
│   ├── site-header.tsx   # Navigation header
│   └── ...
├── lib/                  # Utility functions
│   ├── prisma.ts         # Database client
│   ├── validations.ts    # Zod schemas
│   ├── rate-limit.ts     # Rate limiting
│   └── utils.ts          # General utilities
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## Contact Form Setup

The contact form includes:

- **Validation**: Client and server-side validation with Zod
- **Rate Limiting**: Protection against spam (5 requests per 15 minutes)
- **Database Storage**: Messages saved to MongoDB
- **Error Handling**: User-friendly error messages
- **Security**: IP tracking and user agent logging

### Database Schema

```prisma
model ContactMessage {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String
  company   String?
  message   String
  createdAt DateTime @default(now())
  ipAddress String?
  userAgent String?
}
```

## Customization

### Colors and Branding

Update the color scheme in `app/globals.css`:
```css
:root {
  --primary: oklch(0.205 0 0);
  --accent: oklch(0.97 0 0);
  /* ... other colors */
}
```

### Content

- **Hero Section**: Update in `app/page.tsx`
- **Services**: Modify the `services` array
- **Portfolio**: Update the `works` array
- **Team**: Modify the `team` array
- **Contact Info**: Update email and social links

### Technologies

Add or remove technologies in `components/tech-logos.tsx`:
```typescript
const tech = [
  { name: "Next.js", icon: "/nextjs-logo.png" },
  // Add your technologies here
]
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | MongoDB connection string | Required |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window in ms | 900000 (15 min) |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | 5 |

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email hello@cireon.dev or create an issue in the repository.
