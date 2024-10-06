import homepageImage from "@/public/pricescraper/homepage.png";
import gamepageImage from "@/public/pricescraper/gamepage.png";
import editGameDetailsImage from "@/public/pricescraper/edit-gamedetails.png";
import discordImage from "@/public/pricescraper/discord.png";
import Project, { TProject } from "@/components/project/Project";

const priceScraper_project: TProject = {
  project_name: "PriceScraper",
  project_details: [
    "My goal with PriceScraper to turn my original price scraping program, that I was using via the command line, into a more user friendly and easily customizable tool. This involved me re-writing my original price scraping program, I did this to improve modularization, now it’s very quick and easy for me to add a new supported site that the program can scrape from, while before it was a lot more intertwined. I’ve also tried to improve the error handling, to stop the program from exiting when errors occur. With the new implementation, I had to create it with more than one user in mind, while with the original program, it was just me who used it. ",
    "I knew I needed a user interface for the program, as it was becoming tiresome to add new products via the command line, and I thought this would be a good idea to learn some new skills for web development. I researched some frameworks that I could use, and settled on Express JS for the backend, and React JS for the front end.",
    "I had some experience with Express JS already, having used it in one of my university modules, so I decided to start with coding the backend first (I also have an easier time with coding backend applications). My development process was quite straightforward, I would group APIs together, and have files for each group, e.g., an API dedicated to users, another for products, etc. I used Insomnia to test my APIs were working.",
    "I then moved on to React JS, this was a lot newer to me and I was still grasping the whole idea of components, my biggest struggle is with responsive design, It was always a focus during the development, and I think I did a semi-good job, I learnt a lot in the process, which I’ve brought forward with this website. I built each page and connected the relevant APIs that I had coded before, and then I had my functioning website.",
    "For the database storage I’m using SQLite3, I would like future projects to use a more server sided SQL solution, but this worked for my needs, and it was something I had a good experience with.",
    "Other improvements I’d like to make, would be:",
    [
      "Adding the ability for the PriceScraper program to restart if it ever terminates unexpectedly.",
      "Adding more notification options for users",
      "Improving the design of the site (But I think this will also naturally happen the more websites I make) ",
    ],
  ],
  image_details: {
    srcs: [
      { alt: "Home page", img: homepageImage },
      { alt: "View game chart page", img: gamepageImage },
      { alt: "Edit game details page", img: editGameDetailsImage },
      { alt: "Discord page", img: discordImage }
    ],
    animated: false,
    height: 1536,
    width: 1536,
  },
  project_btns: {
    visit_links: [
      {
        display: "Visit site",
        link: "https://pricescraper.tdmd.co.uk/",
      },
    ],
    github_links: [
      {
        display: "PriceScraper website",
        link: "https://github.com/AmzingTobias/PriceScraper-Interface",
      },
      {
        display: "PriceScraper program",
        link: "https://github.com/AmzingTobias/PriceScraper",
      },
    ],
  },
  use_row: false,
};

const PriceScraperProjectPage = () => {
  return (
    <main className="flex flex-col w-full">
      <Project
        project_name={priceScraper_project.project_name}
        image_details={priceScraper_project.image_details}
        project_details={priceScraper_project.project_details}
        project_btns={priceScraper_project.project_btns}
        use_row={false}
      />
    </main>
  );
};

export default PriceScraperProjectPage;
