# Fortrix Systems Corporate Website

A Next.js 14 corporate website for Fortrix Systems Inc., built with TypeScript, TailwindCSS, and a minimal, enterprise-focused design.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Vitest** - Testing framework

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## CI/CD

The project includes GitHub Actions workflows for continuous integration:

- **Lint & Type Check** - Runs on every push and pull request
- **Test** - Runs test suite
- **Build** - Validates production build

Workflows are located in `.github/workflows/ci.yml`.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
└── test/            # Test files
```

## Brand Colors

The project uses Fortrix brand colors defined in `tailwind.config.ts`:

- Primary: `fortrix-charcoal`, `fortrix-navy`
- Accent: `fortrix-teal`, `fortrix-amber`, `fortrix-crimson`
- Neutrals: `fortrix-grey-900` through `fortrix-grey-100`

## Contact Form Email Setup

The contact form sends emails via **Resend** (recommended for Next.js and serverless environments).

### Setup Steps:

1. **Create a Resend account**:
   - Go to https://resend.com and sign up (free tier: 3,000 emails/month)
   - Verify your email address

2. **Get your API key**:
   - Go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the API key (starts with `re_`)

3. **Configure environment variables**:
   
   **For local development** - Create `.env.local` file:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
   
   **For AWS Amplify** - Add in Amplify Console:
   - Go to App settings → Environment variables
   - Add: `RESEND_API_KEY` = `re_your_api_key_here`

4. **Email Configuration**:
   - Emails are sent to: `hello@fortrixsystems.com`
   - From address: `Fortrix Systems <onboarding@resend.dev>` (for testing)
   - Replies will go to the form submitter's email address

5. **Production Setup** (optional):
   - To use a custom domain (e.g., `noreply@fortrixsystems.com`):
   - Add your domain in Resend Dashboard → Domains
   - Update DNS records (SPF, DKIM) as instructed
   - Update the `from` field in `src/app/api/contact/route.ts`

**Note**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## License

Private - Fortrix Systems Inc.

