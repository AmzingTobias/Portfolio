import Timeline, { TTimelineEvent } from "./Timeline";

const prior_experiences: TTimelineEvent[] = [
  {
    title: "Computer Science BSC",
    role: "Loughborough university",
    startdate: "October 2020",
    endDate: "June 2024",
    bulletpointLists: [
      { title: "", points: ["1st year mark: 82.7%", "2nd year mark: 75.6%"] },
    ],
  },
  {
    title: "BAE Systems",
    role: "Software Engineer Industrial placement",
    startdate: "2022",
    endDate: "2023",
    bulletpointLists: [
      {
        title: "Subset of tasks completed during my placement:",
        points: [
          "Presenting methods to my team of how we can integrate automated testing and building with continuous integration, showcasing a working example of a Jenkins setup",
          "Extracting components of an existing product into a separate development library to increase productivity and maintainability",
          "Using SCADE to create head down display pages that have then been integrated into an existing demo application my team shows off to potential customers",
          "Using Enterprise Architect to create class diagrams",
          "Using DOORs to write high level requirements",
          "Conforming to specialised coding standards, and using code verifiers, like Polyspace to check this",
        ],
      },
    ],
  },
  {
    title: "McDonald's",
    role: "Crew Trainer",
    startdate: "2018",
    endDate: "2022",
    bulletpointLists: [
      {
        title: "Highlights:",
        points: [
          "Within the first year received employee of the month and employee of the quarter (out of approx. 100 employees)",
        ],
      },
      {
        title: "Responsibilities:",
        points: [
          "Keeping the store clean and to a high standard",
          "Meeting time deadlines under pressure",
          "Communicating with the public",
          "Dealing with complaints and resolving issues",
          "Working within a team whilst still using my own initiative where appropriate",
        ],
      },
    ],
  },
  {
    title: "Wymondham High Sixth Form",
    startdate: "September 2018",
    endDate: "June 2020",
    bulletpointLists: [
      {
        title: "A Level Grades",
        points: ["Computing – A", "Economics – B", "Mathematics – B"],
      },
    ],
  },
  {
    title: "Accumulate Wealth Management Ltd",
    role: "Work experience",
    startdate: "2019",
    details:
      "This was a second job alongside McDonald's that allowed me to help save for a car, which gave me more flexibility in my working times at McDonald's",
    bulletpointLists: [
      { title: "Responsibilities", points: ["General administration work"] },
    ],
  },
  {
    title: "ECS Digital, London",
    role: "Work experience",
    startdate: "2019",
    endDate: "Between GCSEs and Sixth form",
    bulletpointLists: [
      {
        title: "Highlights: ",
        points: [
          "Developing new skills",
          "Adjusting to a change of life working in London",
          "Communicating with a new team",
        ],
      },
    ],
  },
  {
    title: "Wymondham High Academy",
    startdate: "September 2013",
    endDate: "June 2018",
    bulletpointLists: [
      {
        title: "GCSE Grades",
        points: [
          "Computing – 9",
          "Mathematics – 8",
          "Science – 9 | 8",
          "History – 7",
          "Graphics – B",
          "English Literature – 6",
          "English Language – 5",
          "Sociology – C",
        ],
      },
    ],
  },
  {
    title: "People for Animal Care Trust (PACT)",
    role: "Voluntary work",
    startdate: "2017",
    bulletpointLists: [
      {
        title: "Responsibilities:",
        points: [
          "Caring for animals",
          "Cleaning pens",
          "Using my own initiative and dealing with members of the public",
          "Completing tasks in a set time and under pressure",
        ],
      },
    ],
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
