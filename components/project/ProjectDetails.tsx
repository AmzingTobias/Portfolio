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
          paragraph.map((point, index) => (
            <ul key={index} className="list-disc ml-8 details-inner" >
              <li key={index} className="details-inner">{point}</li>
            </ul>
          ))
        )
      )}
    </div>
  );
};

export default ProjectDetails;