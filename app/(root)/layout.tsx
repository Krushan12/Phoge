import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { SignedIn } from '@clerk/nextjs'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SignedIn>
        <Sidebar />
        <MobileNav />
      </SignedIn>

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
  )
}

export default Layout