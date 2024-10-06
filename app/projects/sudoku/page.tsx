import sudokuGif from "@/public/sudoku/showcase.gif";
import Project, { TProject } from "@/components/project/Project";

const sudoku_project: TProject = {
  project_name: "Sudoku",
  project_details: [
    "I created this Sudoku solver while I was in Sixth form, I was interested in game development, and wanted some experience in using a game engine. I had a look around at the time and discovered Godot, I liked the idea of it being quite lightweight and so I got to learning.",
    "The sudoku solver was originally coded in python but the sudoku was entered by the python file that was executed. So, I decided to convert the python code to GDScript, due to the similar nature of the two languages, and it allowed me to build a functioning user interface.",
    "While it might be uncommon to see an application created in a game engine, I found it worked quite well for me. ",
    "The algorithm implementation used for solving the Sudoku is backtracking, while not as efficient as other algorithms, it was quick enough for my needs.",
  ],
  image_details: {
    srcs: [{ alt: "Showcase of the sudoku application", img: sudokuGif }],
    animated: false,
    height: 1536 / 3,
    width: 1536 / 3,
  },
  project_btns: {
    github_links: [
      {
        display: "Source code",
        link: "https://github.com/AmzingTobias/sudoku-solver-godot",
      },
    ],
  },
  use_row: true,
};

const SudokuProjectPage = () => {
  return (
    <main className="w-full">
      <Project
        project_name={sudoku_project.project_name}
        image_details={sudoku_project.image_details}
        project_details={sudoku_project.project_details}
        project_btns={sudoku_project.project_btns}
        use_row={true}
      />
    </main>
  );
};

export default SudokuProjectPage;