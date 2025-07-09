# 🖼️ Phoge - AI-Powered Image Transformation Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.3.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-3B82F6?style=flat&logo=clerk&logoColor=white)](https://clerk.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-CDN-2C39BD?style=flat&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-008CDD?style=flat&logo=stripe&logoColor=white)](https://stripe.com/)

Phoge is a cutting-edge web application that leverages AI to provide powerful image transformation capabilities. Built with Next.js 14 and the App Router, it offers a seamless user experience for uploading, editing, and transforming images with various AI-powered features.

## ✨ Features

### 🖼️ AI-Powered Image Transformations
- **Image Restoration**: Enhance and restore old or low-quality images
- **Generative Fill**: Intelligently fill in missing parts of images
- **Object Removal**: Remove unwanted objects from photos
- **Object Recoloring**: Change colors of specific objects in images
- **Background Removal**: Instantly remove backgrounds from images

### 👤 User Experience
- **Secure Authentication**: Powered by Clerk
- **User Profiles**: Track your transformation history
- **Credit System**: Purchase credits for image transformations
- **Responsive Design**: Works on all devices

### 🛠️ Technical Highlights
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **MongoDB** with Mongoose for data persistence
- **Server Actions** for data mutations
- **Cloudinary** for image processing and CDN
- **Stripe** for secure payments
- **Tailwind CSS** with **shadcn/ui** components
- **Framer Motion** for smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- Package manager (npm, yarn, or pnpm)
- MongoDB Atlas account
- Cloudinary account
- Clerk account
- Stripe account (for payments)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/phoge.git
   cd phoge
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # or using yarn
   yarn install
   
   # or using pnpm (recommended)
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and fill in your API keys and configuration.

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev
   
   # or using yarn
   yarn dev
   
   # or using pnpm
   pnpm dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_uri

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
NODE_ENV=development
```

### Third-Party Services Setup

1. **MongoDB Atlas**
   - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Get your connection string and add it to `MONGODB_URI`

2. **Clerk**
   - Sign up at [Clerk](https://clerk.com/)
   - Create a new application and get your API keys
   - Configure the allowed callback URLs in Clerk dashboard

3. **Cloudinary**
   - Sign up at [Cloudinary](https://cloudinary.com/)
   - Get your Cloud Name, API Key, and API Secret
   - Set up an upload preset if required

4. **Stripe**
   - Sign up at [Stripe](https://stripe.com/)
   - Get your API keys (publishable and secret)
   - Set up webhook endpoints in Stripe dashboard

## 🏗 Project Structure

```
phoge/
├── app/                    # App Router directory
│   ├── (auth)/             # Authentication routes
│   ├── (root)/             # Protected routes
│   │   ├── transformations/# Image transformation pages
│   │   ├── credits/        # Credits purchase
│   │   └── profile/        # User profile
│   ├── api/                # API routes
│   │   └── webhooks/       # Webhook handlers
│   └── globals.css         # Global styles
│
├── components/             # Reusable components
│   ├── shared/             # Shared components
│   └── ui/                 # shadcn/ui components
│
├── constants/              # App constants and configurations
├── lib/                    # Utility functions and helpers
│   ├── actions/            # Server actions
│   ├── database/           # Database models and connection
│   └── utils.ts            # Utility functions
│
├── public/                 # Static assets
│   └── assets/             # Images, icons, etc.
│
├── types/                  # TypeScript type definitions
├── .env.example            # Example environment variables
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## 🛠 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

### Code Style
- We use ESLint and Prettier for code formatting
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use TypeScript for type safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication
- [Cloudinary](https://cloudinary.com/) - Image Processing
- [Stripe](https://stripe.com/) - Payments
- [shadcn/ui](https://ui.shadcn.com/) - UI Components



