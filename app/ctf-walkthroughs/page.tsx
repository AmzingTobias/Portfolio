import ProjectCard from "@/app/projects/ProjectCard";
import agentSudoImg from "@/public/ctf/Agent Sudo.png";

export type TCTFDetails = {
  title: string;
  project_page_link: string;
  image_link: string;
};
const CTFWalkthroughPage = () => {
  const agentSudoWalkthrough: TCTFDetails = {
    title: "AgentSudo",
    project_page_link: "/ctf-walkthroughs/agent-sudo",
    image_link: agentSudoImg.src,
  };

  const allWalkthroughs: TCTFDetails[] = [agentSudoWalkthrough];

  return (
    <main className="w-full">
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-28 gap-y-12 sm:gap-x-2 lg:grid-cols-3 lg:max-w-7xl lg:gap-x-2 xl:gap-x-4">
          {allWalkthroughs.map((walkthrough, index) => {
            return (
              <div className="w-full flex grow" key={index}>
                <ProjectCard
                  title={walkthrough.title}
                  project_page_link={walkthrough.project_page_link}
                  image_link={walkthrough.image_link}
                  desc={"A TryHackMe CTF"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CTFWalkthroughPage;
