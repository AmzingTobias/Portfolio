import Timeline, { TTimelineEvent } from "./Timeline";

const prior_experiences: TTimelineEvent[] = [
  {
    title: "Computer Science BSC (Loughborough university)",
    startdate: "October 2020",
    endDate: "June 2024",
    details: "",
  },
  {
    title: "BAE Systems – Software Engineer Industrial placement",
    startdate: "2022",
    endDate: "2023",
    details: "",
  },
  {
    title: "McDonald’s – Crew Trainer",
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
    title: "Work experience at Accumulate Wealth Management Ltd.",
    startdate: "2019",
    details: "",
  },
  {
    title: "Work experience at ECS Digital, London",
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
    title: "People for Animal Care Trust (PACT) Voluntary work",
    startdate: "2017",
    details: "",
  },
];

const PriorExperiencePage = () => {
  return (
    <div>
      <Timeline events={prior_experiences} />
    </div>
  );
};

export default PriorExperiencePage;
