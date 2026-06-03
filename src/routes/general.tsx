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
    title: "How to Reach",
    paragraphs: [
      "By Air",
      "Chennai International Airport (MAA) is about 12 km from the campus, offering both domestic and international connections.",
      "• Taxi: Prepaid or app-based taxis (Uber, Ola) are available at the airport. The drive to IIT Madras takes 30–45 minutes depending on traffic.",
      "• Public Transport: MTC buses and suburban trains are options, though less convenient with luggage.",
      "By Train",
      "Chennai is connected to major Indian cities via two main stations:",
      "• Chennai Central (MAS): Main rail terminal. Taxis and auto-rickshaws to campus take approximately 30–45 minutes.",
      "• Chennai Egmore (MS): Primarily serving regional routes. Taxis and auto-rickshaws to campus take 20–30 minutes.",
      "By Road",
      "Chennai is accessible via national highways, served by two primary bus terminals:",
      "• Kilambakkam (KCBT): Southern bus terminus. Connected to the campus via suburban trains, city buses, or taxis.",
      "• Koyambedu (CMBT): Western bus terminus. Easily accessible via Chennai Metro or city buses.",
      "• Driving: If driving, use GPS navigation to reach the campus located in Guindy on Sardar Patel Road.",
      "Local Transit & Campus Entry",
      "IIT Madras is centrally located and easily accessible from within Chennai:",
      "• Taxi & Auto: Readily available across the city for direct travel to the campus.",
      "• Metro & Bus: The nearest Metro station is Guindy. MTC buses stop right outside the campus gate (stops: “IIT Madras” or “CLRI”).",
      "• Inside the Campus: The campus is vast and green. From the main gate, use the frequent campus shuttle service to reach your venue (e.g., the ICSR building). Check with security at the gate or refer to the campus map for guidance.",
    ],
  },
  {
    title: "Registration & Fees",
    paragraphs: [
      "Please note that registration pricing is inclusive of the mandatory 18% Goods and Services Tax (GST) as per Government of India regulations.",
    ],
  },
  {
    title: "Accommodation",
    paragraphs: [
      "Lodging options feature the IIT Madras guest houses, campus hostels, and Ginger Hotel inside the IITM Research Park, alongside selected local hotels close to the campus. Booking guides and reservation procedures will be announced shortly.",
      "Hostel lodging on campus will be arranged on a paid basis for students, postdoctoral fellows, research associates, and doctoral scholars. Depending on the allocation of sponsorships and funding grants, this accommodation charge may be waived. Further details will be communicated in due course.",
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
              {s.paragraphs.map((p, idx) => {
                if (
                  p === "By Air" ||
                  p === "By Train" ||
                  p === "By Road" ||
                  p === "Local Transit & Campus Entry"
                ) {
                  return (
                    <h3 key={idx} className="font-serif text-lg text-primary font-bold mt-6 mb-2">
                      {p.toString()}
                    </h3>
                  );
                }
                if (p.startsWith("• ")) {
                  return (
                    <div key={idx} className="flex gap-2 pl-4">
                      <span className="text-accent shrink-0">◆</span>
                      <span>{p.substring(2)}</span>
                    </div>
                  );
                }
                return <p key={idx}>{p}</p>;
              })}

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
