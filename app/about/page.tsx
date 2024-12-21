import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="mb-12 flex items-center justify-between rounded-full bg-white/70 p-4 backdrop-blur-lg dark:bg-gray-800/70">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">About Me</h1>
        <div className="w-10" />
      </nav>
      
      <Card className="bg-white/70 p-8 backdrop-blur-lg dark:bg-gray-800/70">
        <h2 className="mb-6 text-2xl font-bold">Personal Information</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            My name is Issa (pronounced Ee-Saa), a current junior student at Carleton College in Northfield, Minnesota. I hail from my hometown Rochester, also in Minnesota, where I've worked as a tutor with a STEM focus for many years. In my time in highschool, I operated as a local interpreter for newly migrated immigrants facilitated at my local mosque, assisting with completion of legal paperwork.
          </p>
          <p>
            I'm currently pursuing a bachelor's degree in Computer Science, with an interest in information security and product management. What fascinates me the most is this field's opportunity to work closely with cross-functional teams, including designers, engineers, marketers, and stakeholders, to build products that not only meet market demands but also delight users.
          </p>
          <div className="my-8">
            <Image
              src="/images/rugby_team.jpg"
              alt="Rugby Team"
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <p>
            Additionally, with the increasing prevalence of cyber threats and the vulnerability of digital systems, the need for information security has become impossible to ignore. To further my knowledge in these areas, I've been actively seeking opportunities to learn and grow, taking courses on methodologies and frameworks concerning software design and computer systems.
          </p>
          <p>
            My hobbies outside my studies include playing for Carleton's men's rugby team, playing card games, drawing, and discussing music with friends.
          </p>
        </div>
      </Card>
    </div>
  )
}