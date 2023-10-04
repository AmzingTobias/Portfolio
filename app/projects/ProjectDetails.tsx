import List from "../../components/List";

export type TProjectDetails = string | string[];

interface IProjectDetailsProps {
  project_name: string;
  details: TProjectDetails[];
}

const ProjectDetails: React.FC<IProjectDetailsProps> = ({
  project_name,
  details,
}) => {
  return (
    <div className="text-lg">
      <h2 className="text-4xl font-bold mb-4">{project_name}</h2>

      {details.map((paragraph, index) =>
        typeof paragraph === "string" ? (
          <p className={`${index === 0 ? "mt-0" : "mt-5"}`} key={index}>
            {paragraph}
          </p>
        ) : (
          <List key={index} list={{ title: "", points: paragraph }} />
        )
      )}
    </div>
  );
};

export default ProjectDetails;
