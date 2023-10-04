import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

type TProjectLinkBtns = {
  display: string;
  link: string;
};

export interface IProjectVisitBtns {
  visit_links?: TProjectLinkBtns[];
  github_links?: TProjectLinkBtns[];
}

const ProjectVisitBtns: React.FC<IProjectVisitBtns> = ({
  visit_links,
  github_links,
}) => {
  return (
    <div className="w-full flex flex-col">
      {visit_links?.map((link_info, index) => (
        <Link
          key={index}
          className="w-full"
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
      {github_links?.map((link_info, index) => (
        <Link
          key={index}
          className="w-full"
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
  );
};

export default ProjectVisitBtns;
