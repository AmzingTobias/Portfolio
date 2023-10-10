import Image from "next/image";
import image_of_me from "../public/me.jpg";
import RoundedImage from "../components/RoundedImage";
import List from "@/components/List";

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
    <main className="w-full">
      <div>
        <div className="flex justify-center ">
          <RoundedImage image_src={image_of_me.src} image_alt="Image of me" />
        </div>
        <hr className="my-6" />
        <div className="text-lg">
          <p>
            Hi, my name is Tobias. I&apos;m {getAge()} years old and attending
            Loughborough University. I&apos;m in my final year, studying
            Computer Science BSc and will graduate in the summer of 2024.
            I&apos;m currently on track for a First.
          </p>
          <div className="my-6" />
          <p>
            I&apos;m hard-working, dedicated and focused, with my placement year
            manager describing my work ethic as &quot;exceptional&quot;. For as
            long as I can remember I&apos;ve had a passion for technology and
            programming. When I was 5-years-old, I bought a trampoline with my
            parents&apos; eBay account (I didn&apos;t get to keep it). I&apos;ve
            known since starting high school that I wanted to be a Software
            Engineer.
          </p>
          <div className="my-6" />
          <p>
            The first programming language I learnt was Python, having been
            taught it in school. Since starting university I&apos;ve broadened
            my skills, either through my modules, or independent learning.
          </p>
          <List
            list={{
              title: "This includes:",
              points: [
                "C++",
                "JavaScript/TypeScript (and the frameworks to create frontend and backend applications)",
                "Java",
              ],
            }}
          />
          <p>
            In addition, I have experience with setting up a Jenkins pipeline
            for automated testing, writing requirements, creating software
            design diagrams, and configuring a VPS to host my own web server.
          </p>
          <div className="my-6" />
          <p>
            Although my passion is technology, I also have a strong interest in
            economics and business. I keep up-to-date with the stock market and
            follow the news regularly to stay informed with what&apos;s
            happening around the world.
          </p>
          <div className="my-6" />
          <p>
            My hobbies include gaming, watching films, listening to music, and
            hanging out with my friends and family. I&apos;m passionate about F1
            (Mercedes), I watch almost every race, including the ones I have to
            wake up at 6am for. I also enjoy football and occasionally play
            golf.
          </p>
        </div>
      </div>
    </main>
  );
}
