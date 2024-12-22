import Link from "next/link"
import { ChevronLeft, Github, Linkedin, Twitter, Facebook, Music, Instagram } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function BlogPage() {
 return (
   <div className="min-h-screen bg-[#1a2b4c] py-8 px-4">
     {/* Header Title */}
     <div className="fixed top-0 left-0 right-0 z-50 py-8 bg-[#1a2b4c]/80 backdrop-blur-md">
       <div className="text-center">
         <h1 className={`${playfair.className} text-4xl text-white mb-2`}>
           Parsing Queries
         </h1>
         <div className={`${playfair.className} text-white/80 text-lg relative inline-block`}>
           with Issa Mohamed
           <div className="absolute -bottom-2 left-0 right-0 h-px bg-white/40"></div>
         </div>
       </div>
     </div>

     {/* Spacer needed to prevent content from hiding behind fixed header */}
     <div className="h-36"></div>

     {/* Top Navigation Bar */}
     <div className="max-w-6xl mx-auto flex justify-between items-center mb-16 mt-8">
       {/* Back Button */}
       <Link href="/">
         <Button className="backdrop-blur-md bg-white/10 rounded-full shadow-xl border border-white/20 hover:bg-white/20">
           <ChevronLeft className="h-5 w-5 text-white" />
           <span className="text-white ml-2">Back to Home</span>
         </Button>
       </Link>

       {/* Social Links */}
       <div className="flex space-x-2">
         <Link href="https://github.com/issamohamed" target="_blank">
           <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
             <Github className="h-5 w-5" />
           </Button>
         </Link>
         <Link href="https://www.linkedin.com/in/issa-mohamed-a2b4a4245/" target="_blank">
           <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
             <Linkedin className="h-5 w-5" />
           </Button>
         </Link>
         <Link href="https://twitter.com/issamohamed23" target="_blank">
           <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
             <Twitter className="h-5 w-5" />
           </Button>
         </Link>
         <Link href="https://www.facebook.com/profile.php?id=100038231138445" target="_blank">
           <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
             <Facebook className="h-5 w-5" />
           </Button>
         </Link>
         <Link href="https://open.spotify.com/user/uchiaclan" target="_blank">
           <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
             <Music className="h-5 w-5" />
           </Button>
         </Link>
         <Link href="https://www.instagram.com/issa101issa/" target="_blank">
           <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
             <Instagram className="h-5 w-5" />
           </Button>
         </Link>
       </div>
     </div>

     <div className="max-w-4xl mx-auto space-y-16">
       {/* Blog Entry 1 */}
       <article className="space-y-6">
         <h2 className={`${playfair.className} text-6xl md:text-8xl text-white text-center`}>
           GlassMorphism: Fad or the Future?
         </h2>
         <div className={`${playfair.className} text-center text-white/90 text-xl mb-8`}>
           December 22, 2024
         </div>
         <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl border border-white/20">
           <div className="text-white/90 leading-relaxed space-y-4">
             <p>
               I find myself endlessly fascinated by the ebb and flow of design trends, particularly those that seem to captivate the collective imagination so thoroughly, like glassmorphism. It's almost impossible for me to examine it without my mind spiraling into a maze of questions about why it works, how it makes us feel, and whether it's destined to linger or fade into obscurity. There's something almost poetic about the way glassmorphism mimics the translucent, ethereal quality of frosted glass—how it manages to feel both futuristic and oddly familiar, as though it's part of a shared visual memory we've all tapped into, consciously or not. It's hard not to wonder if this resonance is what makes it so alluring, or if it's simply a clever trick of the light.
             </p>
             <p>
               When I think about its strengths, I find myself grappling with the tension between aesthetic beauty and practical utility. On the one hand, glassmorphism has this undeniable elegance—it invites you to peer through the layers of a design, teasing you with just enough transparency to create curiosity without overwhelming your senses. But then, my mind quickly shifts to the potential drawbacks, like the performance costs on less powerful devices, or the accessibility challenges that arise when a design is too subtle for some users to navigate comfortably. It's like trying to balance on a knife's edge, where the success of a design trend hinges on its ability to satisfy both the artistic and the functional. And yet, isn't that the eternal struggle of good design?
             </p>
             <p>
               I suppose what I find most thought-provoking about glassmorphism is its dual nature—it feels both fleeting and timeless, as though it could just as easily be a passing obsession as it could be a permanent fixture in our design toolkit. But then, a question inevitably arises to the surface for me: is this style meant to have boundaries? Should it be applied indiscriminately across all use cases, or is it meant to serve a more deliberate, even symbolic, purpose? 
             </p>
             <p>
               When I see glassmorphism in action, it often feels like more than just a design choice—it feels like a signal. There's an intentionality to the frosted layers, the soft glows, and the delicate interplay of transparency and depth that suggests it's not merely about making something look beautiful. It seems to whisper, "This is cutting-edge. This is advanced." I can't help but wonder if its purpose lies not in universality but in its capacity to convey sophistication, to act as a visual cue that what you're engaging with is technologically forward-thinking. Its as if glassmorphism has this almost uncanny ability to project an image—not necessarily of the future as it will be, but of the future as we want to imagine it: It's a crafted ideal, a version of technology that feels clean, light, and accessible, as though it's trying to reassure us that the complexity of what lies beneath is nothing to fear. But this leads me to wonder: does this aesthetic lose its potency when it's applied to products or interfaces that don't inherently demand that kind of association? If every app, every site, and every button adopts this glossy, glassy sheen, does it still communicate innovation—or does it become just another visual gimmick?
             </p>
             <p>
               Perhaps glassmorphism works best when it's tethered to a sense of purpose, when it acts as a familiar yet forward-thinking marker for technological sophistication. For example, when I see it in systems like macOS Big Sur or Windows 11, it feels right—it matches the narrative of those platforms as cutting-edge and sleek. But I find myself questioning how it would feel in, say, a grocery store's app or a brand trying to sell soap. Would the frosted layers and glowing accents elevate the experience, or would they feel out of place, even disingenuous? And what does that tell us about the role of design in shaping not just how we interact with technology, but how we perceive its purpose? Ultimately, glassmorphism feels to me, aspirational in a way that feels almost universal, yet I wonder if it's a vision we should be careful with, one that's only effective when used sparingly and thoughtfully.
             </p>
           </div>
         </div>
       </article>

       {/* Blog Entry 2 */}
       <article className="space-y-6">
         <h2 className={`${playfair.className} text-6xl md:text-8xl text-white text-center`}>
           Playlists: The Pros and Cons
         </h2>
         <div className={`${playfair.className} text-center text-white/90 text-xl mb-8`}>
           September 16, 2024
         </div>
         <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl border border-white/20">
           <div className="text-white/90 leading-relaxed space-y-4">
             <p>
               For starters, I essentially never used to make playlists, as I thought it was just unnecessary work I didn't care to do. In fact, to people's horror, I used to be that person who hit shuffle play on my liked songs with no care in the world if the song that played from my huge library would even remotely fit the mood I was in. In some way, that was the magic of it though: the fact I never placed any particular focus nor attention on what "mood" I was in, nor did I ever feel I had to get to the bottom of which mood I was in from my current circumstance or position. Instead, I allowed the random sequences of songs to freely alter my mood subconsciously, saving me when I was feeling a little under the water on various occasions from a prolonged mood when an upbeat song came on. Of course, depending on my luck, the shuffled song itself could actually be the perpetrator when it came to putting me in a bad mood, but that was less likely seeing as at the end of the day, I still really enjoyed the songs in my library, or else they wouldn't be there.
             </p>
             <p>
               This was the way things were for me for the longest time since I had first downloaded the Spotify app as a teenager. A good thing to note is that I definitely categorize myself as kind of a huge music head; I boasted around 6,000 or so tracks by the time I arrived at my freshman year of college, but seeing as this was something I normally kept to myself most of the time, topics and curiosity surrounding music were a very insightful and meaningful way to discuss and connect with the new friends I began to make on campus. Since I was a kid, I opened my ears to a lot of music of varying genres, hence the fairly outrageous size of my library; what could I say, if it sounded good, it sounded good. I soon found out these opennesses to certain tastes were often acquired rather than not, as I found myself discussing specific music, artists, and genres at greater lengths with specific people who were big fans of certain things but fairly guarded and conservative when it came to other pools of genres, which I understood and simply went into depth with others who weren't.
             </p>
             <p>
               Interestingly enough, most of the discussions I was involved in on the topic of music really gave me a better lens into my general tastes, as just like everyone else, I had clear sonic elements and melodies I wasn't aware of at first that really rowed my boat audibly. I technically had a singular lengthy miscellaneous playlist that was essentially a garbage dump of what I perceived as "safe" music, with its functionality essentially being a slimmer version of my liked songs library which could be played in public to other people without rustling anyone's feathers, as I understood back then that although I could enjoy every song I saved, it was still my library and not all the tracks were ones people could get behind easily.
             </p>
             <p>
               So to set things straight, during the summer of my freshman year, just as I was for the first time emotionally and mentally going through the work of organizing categories that I hadn't ever bothered to make when it came to music, I also decided to do some of the heavy lifting physically by actually starting to make my first ever few actual playlists. Just like an average person's Spotify, the first few weren't that interesting, covering vague and very straightforward moods and genres that most people can relate to. By bouncing around these first few playlists, I was starting to understand the allure of organizing these moods and just how much sway they actually had on my psyche when I listened to them intentionally.
             </p>
             <p>
               With these generally positive results, I began to make more, covering more moods and themes I planned to make playlists for eventually. Throughout this process, an interesting thing I began to notice was that all those years of shuffle playing my entire library allowed me to be familiar with almost every song, as I had equal exposure to all the songs in my library when shuffling; this essentially allowed me to quickly, off the top of my head, be able to add songs that matched the mood of whatever playlist I was workshopping.
             </p>
             <p>
               When I started making these playlists, I thought I knew the endgoal: eventually having a big playlist for every big sector or category/genre, and whenever I found new music that fit in one of them, I would simply add on to one of those playlists. There wouldn't necessarily be any new playlists that needed to be made from scratch off this basis if I had a huge playlist to cover each of the bases right from the jump then right? boy was I wrong. Interestingly, I soon began to appreciate the authenticity of my original tracklists for a specific playlist made for a specific mood or theme, to the point that even if I heard a new song long after I finished making it that fit the description, I wouldn't dare add it to the playlist. Of course not everyone would follow that course of action, but that's around the time I realized that I wouldn't be one of those people with a handful of mega playlists that they stuck with forever, adding song after song when the time came.
             </p>
             <p>
               These were essentially the insights I gathered over the summer. So as my sophomore school year began, I began to make new playlists to bundle up my new favorite songs I was starting to play a lot, with a focus on much more individual and complex emotions. This is the strategy I now currently employ, and boy do I have a lot of playlists because of it. I kind of describe this playlist-making method to my friends as a "time capsule," as although the playlist was originally made to capture a very niche feeling, the time I spend playing it adds to its value, so whenever I come back to it, that specific bundle of songs immediately allows me to reminisce about where I was in life when I first made it.
             </p>
             <p>
               A pro that really stands out to me now is how all that initial work of organizing music into playlists really pays dividends when it comes to sharing music with others—instead of frantically scrolling through my recently liked songs trying to remember that one perfect song recommendation, I can quickly pull up the exact playlist that captures the specific vibe or sound I think someone would dig. However, a con here that I've experienced since making these playlists now as a senior in college is, of course, that for a new playlist to be made, I need to listen to fresh new music I haven't used before in this way, meaning I have to take much-needed breaks from relistening to my most recent rotation of playlists. I think this concern can be generalized to a greater point that playlists, both big and small, are limited, which is a pro when you first make them for that distinctive separation but can be a con as they can put you in a rut for further musical exploration which, if you're someone like me, could might as well be your next inspiration for a new one. If anything, writing this has shed much light on just how seriously I take crafting playlists, so maybe its just me at the end of the day.
             </p>
           </div>
         </div>
       </article>
     </div>
   </div>
 )
}