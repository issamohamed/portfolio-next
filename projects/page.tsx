import Link from "next/link"
import { ChevronLeft } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

const projects = [
  {
    title: "Training Agent Trainers in Pokemon",
    date: "March 17, 2025",
    description: `I developed this AI project with a team to create intelligent agents for strategic decision-making in Pokemon battles. We implemented and compared tree-based search (Minimax with alpha-beta pruning) and reinforcement learning (Q-Learning) approaches using both Python and NodeJS, evaluating their performance across various battle scenarios. Pokemon provides a fascinating environment for AI research with its complex decision space, partial observability, and simultaneous actions. Our agents successfully learned type effectiveness, strategic switching, and optimal move selection through different computational approaches.`,
    link: "https://github.com/Carleton-Comps/comps_24_25"
  },
  {
    title: "Natural Taste",
    date: "June 25, 2024",
    description: `"Natural Taste" is a nifty web application I've developed, inspired by the fascinating connection between weather and music, and how our environment can shape our listening experiences. At its core, the project represents my vision of creating a more intuitive and environmentally-aware approach to music discovery. The application is built as a multi-page web interface, with each page serving a distinct purpose in the user's journey. The landing page welcomes users with an engaging interface featuring social links and a clear call-to-action. From there, users can input their city to begin their weather-music exploration. The real magic happens behind the scenes: when a user enters their location, the application makes a precise API call to AccuWeather, fetching real-time weather data for their specific location. This weather information is then expertly processed and passed to the Groq AI API, which employs sophisticated algorithms to generate contextually appropriate music recommendations.`,
    link: "https://jocular-fox-018062.netlify.app"
  },
  {
    title: "Seer",
    date: "September 12, 2023",
    description: `"Seer" is a AI web application I've been passionately developing, graciously inspired by recent strides in new public AI use cases. At its core is a Python script that serves as the project's foundation. It utilizes the Flask web framework to create a user-friendly interface. When you visit the project's main page, you'll be greeted by a supplementary HTML template that provides the interface for the User's entire experience. The real magic unfolds when the audio is handed over to the processing module. It begins by verifying the existence of the uploaded audio file and then proceeds to load it into a specialized audio processing API developed by OpenAI called "Whisper". Whisper boasts impressive capabilities, including transcribing spoken words and natural language in any language within the audio, effectively converting audio into readable text.`,
    link: "https://github.com/issamohamed/Seer"
  },
  {
    title: "Stock Price Fetcher",
    date: "January 8, 2023",
    description: `This Java program allows users to retrieve the current stock price of any company listed on the New York Stock Exchange (NYSE). It's a command-line application that interacts with the Alpha Vantage API to fetch real-time stock data. The program offers a user-friendly interface where users can enter the NYSE abbreviation of the desired stock. It validates the input, retrieves the stock price using the API, and displays it on the screen. Users can continue looking up stock prices for multiple stocks, with the option to exit the program at any time.`,
    link: "https://github.com/issamohamed/Stock_Price_Fetcher/blob/main/StockPriceFetcher.java"
  },
  {
    title: "ATM Machine",
    date: "December 24, 2022",
    description: `This project is a user-friendly Java application that emulates the functionality of an Automated Teller Machine (ATM). With this program, one can effortlessly check their account balance, withdraw funds, deposit funds, and exit the system. The program verifies that the amount is within one's available balance and provides a success message upon a valid withdrawal. In case of insufficient funds, an appropriate error message is shown.`,
    link: "https://github.com/issamohamed/ATM-Interface-/blob/main/atm_interface.java"
  },
  {
    title: "Connect 4",
    date: "November 24, 2021",
    description: `As an avid lover of classic games, for a class project, I embarked on a thrilling project to create my own rendition of "Connect Four" in Python. To bring this game to life, I harnessed the power of the Tkinter module, a popular graphical user interface library, and augmented it with my custom graphics library. Through careful design and meticulous coding, I managed to strike a good balance between aesthetics and functionality, resulting in an immersive and captivating gaming experience.`,
    link: "https://github.com/issamohamed/Connect-4/blob/main/connect4.py"
  },
  {
    title: "Sudoku Solver",
    date: "December 3, 2022",
    description: `Growing up, I never fared well against Sudoku Puzzles. Inspired by this shortcoming, I began the development of "The Sudoku Solver", a small project that uses a backtracking algorithm to solve Sudoku puzzles. By systematically exploring number combinations for each empty cell and adhering to Sudoku rules, the solver efficiently finds the optimal solution. It starts by identifying empty cells and tries numbers from 1 to 9, ensuring their validity in rows, columns, and 3x3 grids.`,
    link: "https://github.com/issamohamed/Sudoku-Solver/blob/main/sudoku_solver_txt.py"
  }
]

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="mb-12 flex items-center justify-between rounded-full bg-white/70 p-4 backdrop-blur-lg dark:bg-gray-800/70">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Projects</h1>
        <div className="w-10" />
      </nav>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/70 p-8 backdrop-blur-lg dark:bg-gray-800/70">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{project.date}</p>
            <div className="mt-4 prose dark:prose-invert">
              <p>{project.description}</p>
            </div>
            <div className="mt-6">
              <Link href={project.link} target="_blank">
                <Button variant="outline">View Project</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}