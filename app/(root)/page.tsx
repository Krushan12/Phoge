import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})

  return (
    <>
      {/* Landing page for signed-out users */}
      <SignedOut>
        <section className="flex flex-col items-center justify-center gap-6 py-20 text-center">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl max-w-2xl">
            Unleash Your Creative Vision with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Phoge</span>
          </h1>
          <p className="max-w-xl text-gray-300 md:text-lg">
            Restore, enhance, and transform images effortlessly with AI-powered tools.
          </p>
          <SignInButton mode="modal">
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90">
              Get Started
            </Button>
          </SignInButton>
        </section>
      </SignedOut>

      {/* Authenticated homepage */}
      <SignedIn>
        <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Phoge
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
      </SignedIn>
    </>
  )
}

export default Home