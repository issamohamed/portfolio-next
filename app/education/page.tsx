import Link from "next/link"
import { ChevronLeft } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

const courses = [
  {
    title: "CS.254: Computability & Complexity",
    description: "Proofs & Theory",
  },
  {
    title: "CS.251: Programming Languages",
    description: "Scheme, Python, C, C++",
  }, 
  {
    title: "CS.252: Algorithms",
    description: "Proofs & Theory",
  },
  {
    title: "CS.202: Mathematics of Computer Science",
    description: "Proofs & Theory",
  },
  {
    title: "CS.208: Introduction to Computer Systems",
    description: "C, Assembly Language",
  },
  {
    title: "CS.257: Software Design",
    description: "HTML, CSS, Javascript, SQL",
  },
  {
    title: "CS.201: Data Structures",
    description: "Java",
  },
  {
    title: "CS.111: Introduction to Computer Science",
    description: "Python",
  },
]

const education = [
  {
    school: "Century Senior High School",
    location: "Rochester, Minnesota",
    period: "2017 - 2021",
    description: "Graduated with a Honors Diploma and a 3.8 GPA.",
  },
  {
    school: "Carleton College",
    location: "Northfield, Minnesota",
    period: "2021 - Present",
    description: "Declared computer science major pursuing a Bachelors Degree.",
  },
]

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-12 flex items-center justify-between rounded-full bg-white/70 p-4 backdrop-blur-lg dark:bg-gray-800/70">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Education</h1>
          <div className="w-10" />
        </nav>

        <div className="grid gap-8">
          <Card className="bg-white/70 p-8 backdrop-blur-lg dark:bg-gray-800/70">
            <h2 className="mb-6 text-2xl font-bold">Academic History</h2>
            <div className="grid gap-8">
              {education.map((item, index) => (
                <div key={index} className="grid gap-2">
                  <h3 className="text-xl font-semibold">{item.school}</h3>
                  <p className="text-muted-foreground">{item.location}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white/70 p-8 backdrop-blur-lg dark:bg-gray-800/70">
            <h2 className="mb-6 text-2xl font-bold">Relevant Courses</h2>
            <div className="grid gap-4">
              {courses.map((course, index) => (
                <div key={index} className="rounded-lg bg-white/50 p-4 dark:bg-gray-700/50">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
