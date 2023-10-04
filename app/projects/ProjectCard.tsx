import Image from "next/image";
import Link from "next/link";
import { TProjectDetails } from "./page";

interface IProjectCardProps extends TProjectDetails {}

const ProjectCard: React.FC<IProjectCardProps> = ({
  title,
  project_page_link,
  image_link,
  desc,
}) => {
  return (
    <div
      style={{ maxWidth: 432 }}
      className="hover:cursor-pointer transition-colors duration-150 hover:bg-red-500 hover:bg-opacity-90"
    >
      <Link href={project_page_link}>
        <Image
          src={image_link}
          alt={title}
          width={432}
          height={480}
          className="bg-zinc-800 bg-opacity-30"
        />
        <div className="p-1">
          <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          {desc && (
            <>
              <hr className="opacity-90 my-1.5" />
              <p>{desc}</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
