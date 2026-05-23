import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program · AHA & DS 2026" },
      {
        name: "description",
        content:
          "Four-day scientific program of the AHA & DS 2026 conference at IIT Madras: plenary lectures, contributed talks and poster sessions.",
      },
      { property: "og:title", content: "Program · AHA & DS 2026" },
      {
        property: "og:description",
        content: "Plenary lectures, contributed talks and poster sessions, 15–18 December 2026.",
      },
    ],
  }),
  component: ProgramPage,
});

const days = [
  {
    date: "Tuesday · 15 December",
    items: [
      { time: "09:00 - 10:30", category: "Registration & Inauguration", chair: "TBD", topic: "TBD" },
      { time: "10:30 - 11:30", category: "Plenary Lecture I", chair: "TBD", topic: "TBD" },
      { time: "11:30 - 11:45", category: "Tea Break", chair: "—", topic: "—" },
      { time: "11:45 - 12:45", category: "Plenary Lecture II", chair: "TBD", topic: "TBD" },
      { time: "12:45 - 14:30", category: "Lunch Break", chair: "—", topic: "—" },
      { time: "14:30 - 16:00", category: "Contributed Talks (Parallel)", chair: "TBD", topic: "TBD" },
      { time: "16:00 - 16:30", category: "Tea Break", chair: "—", topic: "—" },
      { time: "16:30 - 17:30", category: "Felicitation Session", chair: "TBD", topic: "TBD" },
      { time: "17:30 onwards", category: "Welcome Reception", chair: "—", topic: "—" },
    ],
  },
  {
    date: "Wednesday · 16 December",
    items: [
      { time: "09:30 - 10:30", category: "Plenary Lecture III", chair: "TBD", topic: "TBD" },
      { time: "10:30 - 10:45", category: "Tea Break", chair: "—", topic: "—" },
      { time: "10:45 - 11:45", category: "Plenary Lecture IV", chair: "TBD", topic: "TBD" },
      { time: "11:45 - 12:00", category: "Short Break", chair: "—", topic: "—" },
      { time: "12:00 - 13:00", category: "Contributed Talks", chair: "TBD", topic: "TBD" },
      { time: "13:00 - 14:30", category: "Lunch Break", chair: "—", topic: "—" },
      { time: "14:30 - 16:00", category: "Contributed Talks (Parallel)", chair: "TBD", topic: "TBD" },
      { time: "16:00 - 16:30", category: "Tea Break", chair: "—", topic: "—" },
      { time: "16:30 - 18:00", category: "Poster Session I", chair: "TBD", topic: "TBD" },
    ],
  },
  {
    date: "Thursday · 17 December",
    items: [
      { time: "09:30 - 10:30", category: "Plenary Lecture V", chair: "TBD", topic: "TBD" },
      { time: "10:30 - 10:45", category: "Tea Break", chair: "—", topic: "—" },
      { time: "10:45 - 11:45", category: "Plenary Lecture VI", chair: "TBD", topic: "TBD" },
      { time: "11:45 - 12:00", category: "Short Break", chair: "—", topic: "—" },
      { time: "12:00 - 13:00", category: "Contributed Talks", chair: "TBD", topic: "TBD" },
      { time: "13:00 - 14:30", category: "Lunch Break", chair: "—", topic: "—" },
      { time: "14:30 - 16:00", category: "Contributed Talks (Parallel)", chair: "TBD", topic: "TBD" },
      { time: "16:00 - 16:30", category: "Tea Break", chair: "—", topic: "—" },
      { time: "16:30 - 18:00", category: "Poster Session II", chair: "TBD", topic: "TBD" },
      { time: "19:00 onwards", category: "Conference Banquet", chair: "—", topic: "—" },
    ],
  },
  {
    date: "Friday · 18 December",
    items: [
      { time: "09:30 - 10:30", category: "Plenary Lecture VII", chair: "TBD", topic: "TBD" },
      { time: "10:30 - 10:45", category: "Tea Break", chair: "—", topic: "—" },
      { time: "10:45 - 11:45", category: "Plenary Lecture VIII", chair: "TBD", topic: "TBD" },
      { time: "11:45 - 12:00", category: "Short Break", chair: "—", topic: "—" },
      { time: "12:00 - 13:00", category: "Concluding Remarks & Vote of Thanks", chair: "TBD", topic: "TBD" },
    ],
  },
];

function ProgramPage() {
  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="Scientific Program [TBD]"
        title="Four Days of Lectures, Talks and Discussions"
        intro="The tentative daily schedule, featuring plenary lectures, contributed talks, and poster sessions. Session chairs and topics are currently to be decided (TBD)."
      />

      <div className="space-y-16 mt-16">
        {days.map((d) => (
          <section key={d.date} className="overflow-x-auto">
            <div className="flex items-baseline gap-4 mb-6">
              <h2 className="font-serif text-2xl text-primary whitespace-nowrap">{d.date}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Header row for large screens */}
            <div className="hidden md:grid md:grid-cols-[10rem_1.2fr_1fr_1.5fr] gap-6 pb-3 border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              <div>Time Slot</div>
              <div>Category</div>
              <div>Session Chair</div>
              <div>Topic / Title</div>
            </div>

            <ul className="divide-y divide-border border-b border-border">
              {d.items.map((item) => (
                <li
                  key={item.time + item.category}
                  className="py-4 grid grid-cols-1 md:grid-cols-[10rem_1.2fr_1fr_1.5fr] gap-4 md:gap-6 md:items-baseline"
                >
                  {/* Time */}
                  <span className="font-mono text-sm text-accent tracking-wider font-medium">{item.time}</span>

                  {/* Category */}
                  <span className="font-serif text-base text-foreground font-medium">{item.category}</span>

                  {/* Chair */}
                  <div className="text-sm text-muted-foreground">
                    <span className="md:hidden font-semibold text-[0.65rem] uppercase tracking-wider block mb-1 text-accent/80">
                      Session Chair:
                    </span>
                    <span>{item.chair}</span>
                  </div>

                  {/* Topic */}
                  <div className="text-sm text-muted-foreground">
                    <span className="md:hidden font-semibold text-[0.65rem] uppercase tracking-wider block mb-1 text-accent/80">
                      Topic / Title:
                    </span>
                    <span className="font-serif italic">{item.topic}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* <section className="mt-20 grid md:grid-cols-2 gap-6">
        <div className="border border-border bg-card p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-3">Posters</p>
          <h3 className="font-serif text-2xl text-primary">Call for Posters</h3>
          <div className="rule-gold w-12 my-4" />
          <p className="text-muted-foreground leading-relaxed text-sm">
            Researchers — particularly graduate students and early-career mathematicians — are
            invited to present posters across both poster sessions. Submit a one-page abstract via
            the registration portal.
          </p>
        </div>
        <div className="border border-border bg-card p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-3">Talks</p>
          <h3 className="font-serif text-2xl text-primary">Contributed Talks</h3>
          <div className="rule-gold w-12 my-4" />
          <p className="text-muted-foreground leading-relaxed text-sm">
            A limited number of 20-minute contributed talk slots are available. Selection will be
            made by the scientific committee from submitted abstracts.
          </p>
        </div>
      </section> */}

      <p className="text-center text-sm text-muted-foreground italic mt-16">
        A detailed program booklet will be circulated closer to the conference.
      </p>
    </div>
  );
}
