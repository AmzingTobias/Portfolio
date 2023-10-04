import Image from "next/image";
import image_of_me from "../public/me.jpg";
import RoundedImage from "../components/RoundedImage";

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
      <div className="pb-4">
        <div className="flex justify-center ">
          <RoundedImage image_src={image_of_me.src} image_alt="Image of me" />
        </div>
        <hr className="my-6" />
        <div className="">
          <p className="text-lg">
            Hi, my name is Tobias. I&apos;m from a small town in Norfolk,
            England. I&apos;m {getAge()} years old and attending Loughborough
            University, I’m in my final year studying computer science BSc with
            plans to graduate in summer 2024. I&apos;m currently on track for a
            First. I&apos;m passionate about Formula 1, supporting Mercedes, I
            watch almost every race, including the ones I have to wake up at 6am
            for. I spend lots of my spare time playing games, watching films,
            listening to music, and hanging out with my friends and family.
            I&apos;m hard working and very dedicated, with my work ethic having
            been described as &quot;exceptional&quot;. The primary reason for
            this is my passion for technology, it has always been my interest
            throughout school, and I&apos;ve been very fortunate to know that I
            want to be a Software Engineer.
          </p>
          <div className="my-6" />
          <p className="text-lg">
            I have a passion for computers and programming, having done so since
            a young age. I&apos;ve built my own computer, and am regularly
            called upon via friends and family for any technology related
            problems. The first programming language I really used was python,
            but since starting University I have learnt C++, Java,
            Javascript/Typescript (and the different frameworks to create
            frontend and backend applications). I have experience in setting up
            a Jenkins pipeline for automated testing, and configuring a VPS to
            host my own websites / server.
          </p>
        </div>
      </div>
    </main>
  );
}
