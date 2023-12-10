import LabeledDivider from "../dividers/LabeledDivider";
import EventCard from "../cards/EventCard";

export default function PastEventsSection() {
  return (
    <>
      <div className="past">
        <LabeledDivider label={"Past events"} />
        <div className="past grid">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div className="link center">
        <a href="/events">Explore all</a>
      </div>
    </>
  );
}
