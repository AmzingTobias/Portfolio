import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";

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
    <div className="w-full flex flex-col gap-2">
      {visit_links?.map((link_info, index) => (
        <Link
          key={index}
          className="w-full"
          target="_blank"
          prefetch={false}
          href={link_info.link}
        >
          <Button className="w-full text-lg flex min-h-12">
            <div className="inline-flex">
              <FiExternalLink />
            </div>
            &nbsp;{link_info.display}
          </Button>
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
          <Button className="w-full text-lg flex min-h-12" variant={"secondary"}>
            <div className="inline-flex">
              <AiFillGithub />
            </div>
            &nbsp;{link_info.display}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ProjectVisitBtns;
