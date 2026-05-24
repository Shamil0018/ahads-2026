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

      <div className="flex flex-col items-center justify-center border border-border bg-card p-12 text-center mt-12 shadow-soft">
        <p className="text-[0.75rem] uppercase tracking-[0.4em] font-semibold text-accent mb-2">Schedule</p>
        <h2 className="font-serif text-3xl font-semibold text-primary">To Be Decided (TBD)</h2>
        <div className="rule-gold w-16 mx-auto my-5" />
        <p className="text-sm text-muted-foreground max-w-md">
          The detailed scientific program and daily schedule will be announced soon.
        </p>
      </div>

      <p className="text-center text-sm text-muted-foreground italic mt-16">
        A detailed program booklet will be circulated closer to the conference.
      </p>
    </div>
  );
}
