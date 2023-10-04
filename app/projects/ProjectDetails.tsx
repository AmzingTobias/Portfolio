import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

type TProjectLinkBtns = {
  display: string;
  link: string;
};

interface IProjectDetailsProps {
  project_name: string;
  details: string[];
  project_visit_links?: TProjectLinkBtns[];
  project_github_links?: TProjectLinkBtns[];
}

const ProjectDetails: React.FC<IProjectDetailsProps> = ({
  project_name,
  details,
  project_visit_links,
  project_github_links,
}) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">{project_name}</h2>

      {details.map((paragraph, index) => (
        <p className="mt-2" key={index}>
          {paragraph}
        </p>
      ))}
      <div className="w-full items-center justify-center flex flex-col mt-2">
        {project_visit_links?.map((link_info, index) => (
          <Link
            key={index}
            className="w-11/12"
            target="_blank"
            prefetch={false}
            href={link_info.link}
          >
            <button
              className="w-full mt-3 text-lg bg-red-500 p-4 transition-colors duration-200 ease-in-out 
            hover:bg-red-600 hover:bg-opacity-80 
            active:bg-red-600 active:bg-opacity-100"
            >
              {link_info.display}
            </button>
          </Link>
        ))}
        {project_github_links?.map((link_info, index) => (
          <Link
            key={index}
            className="w-11/12"
            target="_blank"
            prefetch={false}
            href={link_info.link}
          >
            <button
              className="w-full mt-3 text-lg align-middle flex justify-center items-center bg-blue-500 p-4 transition-colors duration-200 ease-in-out 
            hover:bg-blue-600 hover:bg-opacity-80 
            active:bg-blue-600 active:bg-opacity-100"
            >
              <div className="inline-flex">
                <AiFillGithub />
              </div>
              &nbsp;{link_info.display}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
