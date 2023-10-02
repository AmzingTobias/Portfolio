import Timeline, { TTimelineEvent } from "./Timeline";

const prior_experiences: TTimelineEvent[] = [
  {
    title: "Computer Science BSC",
    role: "Loughborough university",
    startdate: "October 2020",
    endDate: "June 2024",
    details: "",
  },
  {
    title: "BAE Systems",
    role: "Software Engineer Industrial placement",
    startdate: "2022",
    endDate: "2023",
    details: "",
  },
  {
    title: "McDonald’s",
    role: "Crew Trainer",
    startdate: "2018",
    endDate: "2022",
    details: "",
  },
  {
    title: "Wymondham High Sixth Form",
    startdate: "September 2018",
    endDate: "June 2020",
    details: "",
  },
  {
    title: "Accumulate Wealth Management Ltd",
    role: "Work experience",
    startdate: "2019",
    details: "",
  },
  {
    title: "ECS Digital, London",
    role: "Work experience",
    startdate: "2019",
    endDate: "Between GCSEs and Sixth form",
    details: "",
  },
  {
    title: "Wymondham High Academy",
    startdate: "September 2013",
    endDate: "June 2018",
    details: "",
  },
  {
    title: "People for Animal Care Trust (PACT)",
    role: "Voluntary work",
    startdate: "2017",
    details: "",
  },
];

const PriorExperiencePage = () => {
  return (
    <div>
      <div className="sm:px-2 md:px-4 md:py-2 lg:px-6 lg:py-4">
        <Timeline events={prior_experiences} />
      </div>
    </div>
  );
};

export default PriorExperiencePage;
