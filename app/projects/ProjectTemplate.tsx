import ImageSlideshow, { IImageSlideshowProps } from "./ImageSlideshow";
import ProjectDetails, { TProjectDetails } from "./ProjectDetails";
import ProjectVisitBtns, { IProjectVisitBtns } from "./ProjectVisitBtns";

export type TProjectTemplate = {
  project_name: string;
  project_details: TProjectDetails[];
  image_details: IImageSlideshowProps;
  project_btns: IProjectVisitBtns;
};

interface IProjectTemplateProps extends TProjectTemplate {}

const ProjectTemplate: React.FC<IProjectTemplateProps> = ({
  project_name,
  project_details,
  image_details,
  project_btns,
}) => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-row justify-center">
          <div className="w-full max-w-3xl m-2 flex-auto justify-center align-middle">
            <ImageSlideshow
              srcs={image_details.srcs}
              height={image_details.height}
              width={image_details.width}
              slideshowSpeedMs={image_details.slideshowSpeedMs}
            />
          </div>
        </div>
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
  );
};

export default ProjectTemplate;
