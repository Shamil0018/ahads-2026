import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/deadlines")({
  head: () => ({
    meta: [
      { title: "Deadlines · AHA & DS 2026" },
      {
        name: "description",
        content:
          "Important deadlines for registration, abstract submission and payment for AHA & DS 2026.",
      },
      { property: "og:title", content: "Deadlines · AHA & DS 2026" },
      {
        property: "og:description",
        content: "Important dates and deadlines for the conference.",
      },
    ],
  }),
  component: DeadlinesPage,
});

const dates = [
  { date: "01 June 2026", label: "Registration portal opens" },
  { date: "31 August 2026", label: "Early registration deadline" },
  { date: "15 September 2026", label: "Abstract submission deadline" },
  { date: "30 September 2026", label: "Late registration & payment deadline" },
  { date: "15 October 2026", label: "Notification of acceptance" },
  { date: "15–18 December 2026", label: "Conference at IIT Madras" },
];

function DeadlinesPage() {
  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="Important Dates"
        title="Deadlines"
        intro="Please note the following key dates. We encourage participants to register and submit abstracts well in advance."
      />

      <div className="max-w-2xl mx-auto">
        <ol className="relative border-l border-border ml-4">
          {dates.map((d, i) => (
            <li key={d.date} className="ml-8 pb-10 last:pb-0 relative">
              <span className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-serif text-2xl text-primary mt-1">{d.date}</p>
              <p className="text-muted-foreground mt-1">{d.label}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="text-center text-sm text-muted-foreground italic mt-12">
        Dates are subject to revision. Any changes will be announced on this page.
      </p>
    </div>
  );
}
