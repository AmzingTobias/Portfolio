import React from "react";
import ProjectCard from "./ProjectCard";
import psImage from "../../public/pricescraper/pricescraper-demo.png";
import sudokuImage from "../../public/sudoku/showcase.gif";

const ProjectsPage = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCard
        title="PriceScraper"
        img_source={psImage.src}
        mini_desc="Primarily used for digital games, this app scrapes data across multiple sites and keeps a record of what is found. It also features the ability to notify users of price changes for products they're interested in."
      />
      <ProjectCard
        title="Sudoku"
        img_source={sudokuImage.src}
        mini_desc="One of my first early projects, the uniqueness of this is it being created in the game engine Godot. It uses a backtracking algorithm."
      />
    </div>
  );
};

export default ProjectsPage;
