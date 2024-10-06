import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface IProjectDetails {
  title: string;
  project_page_link: string;
  image: StaticImageData;
  desc: string;
};

const ProjectCard: React.FC<IProjectDetails> = ({
  title,
  project_page_link,
  image,
  desc,
}) => {
  return (
    <div
      style={{ maxWidth: 432 }}
      className="hover:cursor-pointer transition-colors duration-150 hover:bg-green-400 hover:bg-opacity-80"
    >
      <Link href={project_page_link}>
        <Image
          src={image}
          alt={title}
          width={432}
          height={480}
          className="bg-zinc-800 bg-opacity-30"
        />
        <div className="p-1">
          <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          {desc && (
            <p>{desc}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;