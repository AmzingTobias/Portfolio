"use client"

import { useEffect, useRef } from "react";
import "./timeline.css"

export type TTimelineEvent = {
  role: string;
  location?: string;
  startdate: string;
  endDate?: string;
  details?: string;
  bulletpointLists: { title: string, points: string[] }[];
};

interface ITimelineProps {
  events: TTimelineEvent[];
}

const Timeline: React.FC<ITimelineProps> = ({ events }) => {

  const timelineEventsRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // Initialize Intersection Observer
    const threshold = 0.5;
    const observer = new IntersectionObserver(
      (timelineEvents) => {
        timelineEvents.forEach((event) => {
          const elem = event.target;
          const ANIMATED_CLASS = "in-view";
          if (event.intersectionRatio >= threshold) {
            elem.classList.add(ANIMATED_CLASS);
            observer.unobserve(elem);
          } else {
            elem.classList.remove(ANIMATED_CLASS);
          }
        });
      },
      { threshold: threshold }
    );

    // Add timeline events to Intersection Observer
    timelineEventsRefs.current.forEach((pointRef) => {
      observer.observe(pointRef);
    });

    // Clean up the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <section className="timeline">
      <ol>
        {events.map((event, index) => (

          <li ref={(liRef) => {
            if (liRef) {
              timelineEventsRefs.current[index] = liRef;
            }
          }} key={index}>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>{event.role}</time>
              </div>
              <div className="details">
                <h3>{event.location}</h3>
                <p className="text-sm sm:text-base details-inner italic font-semibold text-green-400">
                  {event.endDate ? `${event.startdate} - ${event.endDate}` : event.startdate}</p>
                <p className="details-inner">{event.details}</p>
                {event.bulletpointLists.map((bulletpoint, index) => (
                  <div key={index} className="details-inner">
                    <p className="details-inner">{bulletpoint.title}</p>
                    <ul className="list-disc ml-8 details-inner" >
                      {bulletpoint.points.map((point, index) => (
                        <li key={index} className="details-inner">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

    </section>)
}

export default Timeline;