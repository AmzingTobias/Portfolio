import Image from "next/image";
import Link from "next/link";

interface IProjectCardProps {
  title: string;
  mini_desc?: string;
  img_source: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  title,
  img_source,
  mini_desc,
}) => {
  return (
    <div
      style={{ maxWidth: 432 }}
      className="hover:cursor-pointer transition-colors duration-150 hover:bg-red-500 hover:bg-opacity-90"
    >
      <Link href={`/projects/${title.replace(" ", "-")}`}>
        <Image
          src={img_source}
          alt={title}
          width={432}
          height={480}
          className="bg-zinc-800 bg-opacity-30"
        />
        <div className="p-1">
          <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          {mini_desc && (
            <>
              <hr className="opacity-90 my-1.5" />
              <p>{mini_desc}</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
