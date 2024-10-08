import ProjectDetails, { TProjectDetails } from "./ProjectDetails";
import ProjectImages, { IProjectImageProps } from "./ProjectImages";
import ProjectVisitBtns, { IProjectVisitBtns } from "./ProjectVisitBtns";

export type TProject = {
  project_name: string;
  project_details: TProjectDetails[];
  image_details?: IProjectImageProps;
  project_btns: IProjectVisitBtns;
  use_row: boolean;
};

const Project: React.FC<TProject> = ({ project_name, project_details, image_details, project_btns, use_row }) => {
  return (
    <div>
      <div className={`flex flex-col ${use_row ? "2xl:flex-row" : ""}`}>
        {image_details !== undefined ? (
          <div className="flex flex-row justify-center">
            <div
              className={`w-full max-w-3xl m-2 flex-auto justify-center align-middle`}
            >
              <ProjectImages
                {...image_details}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col w-full justify-center m-2 flex-shrink">
          <ProjectDetails
            project_name={project_name}
            details={project_details}
          />
          <div className="w-full flex justify-center 2xl:flex-row">
            <div className="max-w-xs flex-grow mt-4">
              <ProjectVisitBtns
                visit_links={project_btns.visit_links}
                github_links={project_btns.github_links}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project;