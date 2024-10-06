import ProjectCard, { IProjectDetails } from "./ProjectCard";
import psImage from "@/public/pricescraper/demo.png";
import sudokuImage from "@/public/sudoku/showcase.gif";
import chopDemo from "@/public/ecommerce/demo.png";

const priceScraperProject: IProjectDetails = {
  title: "PriceScraper",
  project_page_link: "/projects/pricescraper",
  image: psImage,
  desc: "Primarily used for digital games, this app scrapes data across multiple sites and keeps a record of what is found. It also features the ability to notify users of price changes for products they're interested in.",
};
const sudokuProject: IProjectDetails = {
  title: "Sudoku",
  project_page_link: "/projects/sudoku",
  image: sudokuImage,
  desc: "One of my first early projects, the uniqueness of this is it being created in the game engine Godot. It uses a backtracking algorithm.",
};

const ecommerceProject: IProjectDetails = {
  title: "Ecommerce",
  project_page_link: "/projects/ecommerce",
  image: chopDemo,
  desc: "My final year university dissertation. I created an eccomerce platform that includes functionality for customers and staff. I designed both the backend and frontend myself.",
};

const all_projects: IProjectDetails[] = [
  ecommerceProject,
  priceScraperProject,
  sudokuProject,
];

export default function Projects() {
  return (
    <main className="flex flex-col gap-3 w-full">
      {/* <h1 className="text-3xl underline mb-8 mt-2 font-bold">Projects</h1> */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-28 gap-y-12 sm:gap-x-2 lg:grid-cols-3 lg:max-w-7xl lg:gap-x-2 xl:gap-x-4">
          {all_projects.map((project, index) => {
            return (
              <div className="w-full flex grow" key={index}>
                <ProjectCard
                  title={project.title}
                  project_page_link={project.project_page_link}
                  image={project.image}
                  desc={project.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  )
}