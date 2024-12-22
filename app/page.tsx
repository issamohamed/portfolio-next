import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { TypedText } from "../components/typed-text"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Navigation */}
        <nav className="mb-12 flex items-center justify-between rounded-full bg-white/70 p-4 backdrop-blur-lg dark:bg-gray-800/70">
          <h1 className={`text-2xl font-bold ${playfair.className}`}>Issa Mohamed</h1>
          <div className="flex space-x-4">
            <Link href="/about">
              <Button variant="ghost">About Me</Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link href="/education">
              <Button variant="ghost">Education</Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Card className="bg-white/70 p-8 backdrop-blur-lg dark:bg-gray-800/70">
            <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-full">
              <Image
                src="/images/issa_profile_pic.jpg"
                alt="Profile"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="https://github.com/issamohamed" target="_blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/issa-mohamed-a2b4a4245/" target="_blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com/issamohamed23" target="_blank">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100038231138445" target="_blank">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="bg-white/70 p-8 backdrop-blur-lg dark:bg-gray-800/70">
            <h2 className={`mb-4 text-3xl font-bold ${playfair.className}`}>Who Am I?</h2>
            <TypedText 
              strings={[
                "Programmer.",
                "Student.",
                "Tutor.",
                "Volunteer.",
                "Learner."
              ]} 
            />
          </Card>
        </div>
      </div>

      {/* Blog Button */}
      <Link href="/blog" className="fixed bottom-8 left-1/2 -translate-x-1/2">
  <div className={`backdrop-blur-md bg-white/10 rounded-full px-10 py-5 shadow-xl border border-white/20 hover:bg-white/20 transition-all ${playfair.className} text-2xl font-semibold text-white`}>
          check out my new blog!
        </div>
      </Link>
    </div>
  )
}