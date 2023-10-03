import React from "react";
import ProjectCard from "./ProjectCard";
import psImage from "../../public/pricescraper/pricescraper-demo.png";
import sudokuImage from "../../public/sudoku/showcase.gif";
import shoppingCart from "../../public/ecommerce/cart.png";

export type TProjectDetails = {
  title: string;
  project_page_link: string;
  image_link: string;
  desc: string;
};

const ProjectsPage = () => {
  const priceScraperProject: TProjectDetails = {
    title: "PriceScraper",
    project_page_link: "/projects/pricescraper",
    image_link: psImage.src,
    desc: "Primarily used for digital games, this app scrapes data across multiple sites and keeps a record of what is found. It also features the ability to notify users of price changes for products they're interested in.",
  };
  const sudokuProject: TProjectDetails = {
    title: "Sudoku",
    project_page_link: "/projects/sudoku",
    image_link: sudokuImage.src,
    desc: "One of my first early projects, the uniqueness of this is it being created in the game engine Godot. It uses a backtracking algorithm.",
  };

  const ecommerceProject: TProjectDetails = {
    title: "Ecommerce",
    project_page_link: "/projects/ecommerce",
    image_link: shoppingCart.src,
    desc: "My current final year uni project that is still in development. I plan to create an eccomerce platform for both customers, and warehouse staff.",
  };

  const all_projects: TProjectDetails[] = [
    ecommerceProject,
    priceScraperProject,
    sudokuProject,
  ];

  return (
    <main className="w-full">
      {/* <h1 className="text-3xl underline mb-8 mt-2 font-bold">Projects</h1> */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-28 gap-y-12 sm:gap-x-2 lg:grid-cols-3 lg:max-w-7xl lg:gap-x-2 xl:gap-x-4">
          {all_projects.map((project, index) => {
            return (
              <div className="w-full flex grow" key={index}>
                <ProjectCard
                  title={project.title}
                  project_page_link={project.project_page_link}
                  image_link={project.image_link}
                  desc={project.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
