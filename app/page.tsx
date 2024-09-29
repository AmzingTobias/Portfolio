import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const getAge = (): number => {
  // Get the current date
  const currentDate = new Date();
  // Create a date object for June 27, 2002
  const birthdayDate = new Date("2002-06-27");
  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - birthdayDate.getTime();
  // Calculate the number of years by dividing milliseconds by milliseconds per year (approximately 31536000000)
  const yearsPassed = Math.floor(timeDifference / 31536000000);
  return yearsPassed;
};

export default function Home() {
  return (
    <main className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-8">
        <Avatar className="min-w-72 min-h-72 max-w-72 max-h-72">
          <AvatarImage src="/me.jpg" />
          <AvatarFallback className="bg-transparent">
            <Skeleton className="bg-white/10 min-w-72 min-h-72 max-w-72 max-h-72 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div id="intro" className="flex flex-col justify-center gap-3">
          <p>
            Hi, my name is Tobias. I&apos;m {getAge()} years old and have recently
            graduated with a First Class Honours in Computer Science at Loughborough
            University. Since then I have started as an Associate Security Consultant at
            LRQA, as part of their pen testing team.
          </p>
          <p>
            I&apos;m hard-working, dedicated and focused, with my placement year
            manager describing my work ethic as &quot;exceptional&quot;. For as
            long as I can remember I&apos;ve had a passion for technology.
            When I was 5-years-old, I bought a trampoline with my
            parents&apos; eBay account (I didn&apos;t get to keep it). I&apos;ve
            known since starting high school that I wanted to be a Software
            Engineer.
          </p>
        </div>
      </div>
      <div id="further-details" className="flex flex-col gap-3">
        <p>
          In my spare time I enjoy programming, for a long time I wanted to be a Software Engineer, but
          during my final year of university I was introduced into the Cyber Security industry.
        </p>
        <p>
          Some programming languages / technologies I&apos;ve used in the past incude:
        </p>
        <ul className="list-disc ml-8">
          <li>C++</li>
          <li>Python</li>
          <li>JavaScript / TypeScript (and the relevant frameworks used to create backend and frontend applications)</li>
          <li>PostgreSQL</li>
          <li>Java</li>
        </ul>
        <p>
          In addition, I have experience with setting up a Jenkins pipeline
          for automated testing, writing requirements, creating software
          design diagrams, and configuring a VPS to host my own web server.
        </p>
        <p>
          Although my passion is technology, I also have a strong interest in
          economics and business. I keep up-to-date with the stock market and
          follow the news regularly to stay informed with what&apos;s
          happening around the world.
        </p>
        <p>
          My hobbies include gaming, watching films,
          hanging out with my friends and family. I&apos;m passionate about F1
          (Mercedes), I watch almost every race, including the early ones.
          I also have an interst in Football, supporting my home team Norwich City
          and I occasionally play golf.
        </p>
      </div>
    </main>
  );
}
