export type TTimelineEvent = {
  startdate: string;
  endDate?: string;
  title: string;
  details: string;
};

interface ITimelineProps {
  events: TTimelineEvent[];
}

const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  return (
    <section>
      <ol className="border-l-2 border-red-500">
        {events.map((event, index) => (
          <li key={index}>
            <div className="flex-start flex items-center">
              <div className="-ml-2 -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500"></div>
              <h4 className="-mt-2 text-xl font-semibold">{event.title}</h4>
            </div>
            <div
              className={`mb-1 ml-6 pb-6 ${
                index + 1 === events.length ? "pb-0" : "pb-6"
              }`}
            >
              <p className="text-smtransition italic font-semibold text-blue-400">
                {event.endDate
                  ? `${event.startdate} - ${event.endDate}`
                  : event.startdate}
              </p>
              <p
                className={`mt-2 text-lg ${
                  index + 1 === events.length ? "mb-0" : "mb-4"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
