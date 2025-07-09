import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Sparkles,
  ImageIcon,
  Scissors,
  Palette,
  Eraser,
  Wand2,
  Shield,
  Github,
  Twitter,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <div className="flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(6, 6)">
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="12"
                      rx="2"
                      fill="none"
                      stroke="url(#iconGradient)"
                      strokeWidth="2"
                    />
                    <path d="M0 0 L4 0 M0 0 L0 4" stroke="url(#iconGradient)" strokeWidth="2" />
                    <path d="M20 0 L16 0 M20 0 L20 4" stroke="url(#iconGradient)" strokeWidth="2" />
                    <path d="M0 16 L4 16 M0 16 L0 12" stroke="url(#iconGradient)" strokeWidth="2" />
                    <path d="M20 16 L16 16 M20 16 L20 12" stroke="url(#iconGradient)" strokeWidth="2" />
                    <circle cx="10" cy="8" r="3" fill="url(#iconGradient)" opacity="0.4" />
                  </g>
                </svg>
              </div>
              <span className="text-3xl font-bold text-white bg-clip-text">Phoge</span>
            </div>
          </div>


          <div className="flex items-center space-x-4">
            <SignUpButton mode="modal" afterSignInUrl="/home" afterSignUpUrl="/home">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#60A5FA]/90 hover:to-[#3B82F6]/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignUpButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Image Transformation
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-white">
              Transform Images with
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
                {" "}
                AI Magic
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Phoge leverages cutting-edge AI to provide powerful image transformation capabilities. Restore, edit, and
              enhance your images with professional-grade tools powered by artificial intelligence.
            </p>

            <div className="flex justify-center">
              <SignUpButton mode="modal" afterSignInUrl="/home" afterSignUpUrl="/home">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#60A5FA]/90 hover:to-[#3B82F6]/90"
                >
                  Start Transforming
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
            </div>

            <div className="pt-8">
              <div className="relative max-w-6xl mx-auto">
                {/* Main dashboard screenshot */}
                <div className="relative">
                  <Image
                    src="/home.png"
                    alt="Phoge Dashboard - AI Image Transformation Platform"
                    width={1200}
                    height={700}
                    className="rounded-xl shadow-2xl border border-gray-700"
                  />
                </div>

                {/* Feature screenshots overlay */}
                <div className="absolute -bottom-8 -right-8 hidden lg:block">
                  <div className="grid grid-cols-1 gap-4">
                    <Image
                      src="/gen_ai.png"
                      alt="Generative Fill Feature"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-xl border border-gray-600 opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">AI-Powered Transformations</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional-grade image editing tools powered by advanced artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-gray-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Image Restoration</CardTitle>
                <CardDescription className="text-gray-300">
                  Restore old, damaged, or low-quality images with AI-powered enhancement algorithms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-gray-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Generative Fill</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill missing parts of images or extend backgrounds using advanced AI generation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-gray-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Object Removal</CardTitle>
                <CardDescription className="text-gray-300">
                  Remove unwanted objects from images seamlessly with intelligent content-aware fill.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-gray-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Object Recoloring</CardTitle>
                <CardDescription className="text-gray-300">
                  Change colors of specific objects in your images with precision and natural results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-gray-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Eraser className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Background Removal</CardTitle>
                <CardDescription className="text-gray-300">
                  Remove backgrounds with pixel-perfect precision using advanced AI segmentation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-gray-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-pink-400" />
                </div>
                <CardTitle className="text-white">Secure & Private</CardTitle>
                <CardDescription className="text-gray-300">
                  Your images are processed securely with enterprise-grade privacy protection.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container px-4 md:px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Images?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join developers and creators who are already using Phoge to build amazing image transformation
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton mode="modal" afterSignInUrl="/home" afterSignUpUrl="/home">
                <Button size="lg" variant="secondary" className="px-8 bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <a href="https://github.com/Krushan12/Phoge" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerIconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(6, 6)">
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="12"
                      rx="2"
                      fill="none"
                      stroke="url(#footerIconGradient)"
                      strokeWidth="2"
                    />
                    <path d="M0 0 L4 0 M0 0 L0 4" stroke="url(#footerIconGradient)" strokeWidth="2" />
                    <path d="M20 0 L16 0 M20 0 L20 4" stroke="url(#footerIconGradient)" strokeWidth="2" />
                    <path d="M0 16 L4 16 M0 16 L0 12" stroke="url(#footerIconGradient)" strokeWidth="2" />
                    <path d="M20 16 L16 16 M20 16 L20 12" stroke="url(#footerIconGradient)" strokeWidth="2" />
                    <circle cx="10" cy="8" r="3" fill="url(#footerIconGradient)" opacity="0.4" />
                  </g>
                </svg>
                <span className="text-xl font-bold">Phoge</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered image transformation platform built with modern web technologies.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com/Krushan12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Image Restoration</li>
                <li>Generative Fill</li>
                <li>Object Removal</li>
                <li>Background Removal</li>
              </ul>
            </div>


            <div>
              <h3 className="font-semibold mb-4">Tech Stack</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Next.js 14</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Cloudinary</li>
                <li>Clerk Auth</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Phoge. All rights reserved.</p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
