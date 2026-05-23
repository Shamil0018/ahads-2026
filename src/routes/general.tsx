import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/general")({
  head: () => ({
    meta: [
      { title: "General Information · AHA & DS 2026" },
      {
        name: "description",
        content:
          "General information for AHA & DS 2026: registration, participation, accommodation, talks, posters, payment and travel.",
      },
      { property: "og:title", content: "General Information · AHA & DS 2026" },
      {
        property: "og:description",
        content: "Registration, accommodation, payment and travel information.",
      },
    ],
  }),
  component: GeneralPage,
});

const sections = [
  {
    title: "Registration & Fees",
    paragraphs: [
      "Please note that registration pricing is inclusive of the mandatory 18% Goods and Services Tax (GST) as per Government of India regulations.",
      "The SAARC delegation category applies to delegates from Sri Lanka, Bhutan, India, Maldives, Nepal, Pakistan, Bangladesh, and Afghanistan. All registrations cover entrance to all academic sessions, the delegate kit, and conference dining.",
    ],
  },
  {
    title: "Accommodation",
    paragraphs: [
      "Lodging options feature the IIT Madras guest houses, campus hostels, and Ginger Hotel inside the IITM Research Park, alongside selected local hotels close to the campus. Booking guides and reservation procedures will be announced shortly.",
      "Hostel lodging on campus will be arranged on a paid basis for students, postdoctoral fellows, research associates, and doctoral scholars (with priority for those from SAARC countries). Depending on the allocation of sponsorships and funding grants, this accommodation charge may be waived. Further details will be communicated in due course.",
      "Paid hotel accommodation in the vicinity of the campus will be organized for participating faculty. If required, we will also run shuttle transfers connecting the designated hotels and the conference venue. More information on reservations will be released in due course.",
    ],
  },
  {
    title: "Travel & Support",
    paragraphs: [
      "Indian student attendees may qualify for travel allowance reimbursements, subject to the procurement of funding grants and in strict compliance with Government of India directives.",
    ],
  },
];

function GeneralPage() {
  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="General"
        title="General Information"
        intro="Important guidelines regarding registration fees, accommodation options, hotel bookings, and travel support."
      />

      <div className="max-w-3xl mx-auto space-y-10 mt-12">
        {sections.map((s, i) => (
          <article key={s.title} className="border-l-2 border-accent pl-6">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-2">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="font-serif text-2xl text-primary">{s.title}</h2>
            <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed text-sm">
              {s.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {s.links && (
                <div className="flex flex-wrap gap-3 mt-4 pt-2">
                  {s.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="inline-flex items-center border border-border px-4 py-2 text-xs uppercase tracking-wider text-primary hover:bg-secondary transition-colors rounded-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
