import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Committee · AHA & DS 2026" },
      {
        name: "description",
        content:
          "Organizing and Scientific Committee of the International Conference on Applied Harmonic Analysis and Data Science, IIT Madras 2026.",
      },
      { property: "og:title", content: "Committee · AHA & DS 2026" },
      {
        property: "og:description",
        content: "Organizing and Scientific Committee of AHA & DS 2026 at IIT Madras.",
      },
    ],
  }),
  component: CommitteePage,
});

const organizing = [
  { name: "A. Sathish Kumar (Convenor)", affil: "IIT Madras" },
  { name: "S. Sivananthan (Co-Convenor)", affil: "IIT Delhi" },
  { name: "Ayush Bhandari", affil: "Imperial College London, UK" },
  { name: "D. Venku Naidu", affil: "IIT Hyderabad" },
  { name: "A. Antony Selvan", affil: "IIT Dhanbad" },
  { name: "Niraj Kumar Shukla", affil: "IIT Indore" },
  { name: "Bharath Sriperumbudur", affil: "Pennsylvania State University, USA" },
  { name: "Jitendriya Swain", affil: "IIT Guwahati" },
];

const scientific = [
  { name: "Akram Aldroubi", affil: "Vanderbilt University, USA" },
  { name: "Biswaranjan Behera", affil: "ISI Kolkata" },
  { name: "Alex Iosevich", affil: "University of Rochester, USA" },
  { name: "E.K. Narayanan", affil: "Indian Institute of Science, Bengaluru" },
  { name: "Sergei Pereverzyev", affil: "Johann Radon Institute, Austria" },
  { name: "Qiyu Sun", affil: "University of Central Florida, USA" },
  { name: "S. Thangavelu", affil: "Indian Institute of Science, Bengaluru" },
  { name: "Ding-Xuan Zhou", affil: "University of Sydney, Australia" },
];

function CommitteePage() {
  return (
    <div className="container-prose py-20">
      <PageHeader eyebrow="Committees" title="Organizing & Scientific Committee" intro="" />

      <div className="max-w-xl mx-auto space-y-12 mt-12">
        {/* Organizing Committee */}
        <section>
          <h2 className="font-serif text-xl text-primary text-center">Organizing Committee</h2>
          <div className="rule-gold w-12 mx-auto my-3" />
          <ul className="divide-y divide-border border-y border-border">
            {organizing.map((m) => (
              <li
                key={m.name}
                className="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1"
              >
                <span className="font-serif text-lg text-foreground font-semibold">{m.name}</span>
                <span className="text-sm text-muted-foreground italic">{m.affil}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Scientific Committee */}
        <section>
          <h2 className="font-serif text-xl text-primary text-center">Scientific Committee</h2>
          <div className="rule-gold w-12 mx-auto my-3" />
          <ul className="divide-y divide-border border-y border-border">
            {scientific.map((m) => (
              <li
                key={m.name}
                className="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1"
              >
                <span className="font-serif text-lg text-foreground font-semibold">{m.name}</span>
                <span className="text-sm text-muted-foreground italic">{m.affil}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-20 max-w-2xl mx-auto text-center bg-secondary/40 border border-border p-10">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-3">Correspondence</p>
        <h3 className="font-serif text-2xl text-primary">Conference Secretariat</h3>
        <div className="rule-gold w-16 mx-auto my-5" />
        <p className="text-foreground leading-relaxed">
          Department of Mathematics
          <br />
          Indian Institute of Technology Madras
          <br />
          Sardar Patel Road, Chennai 600036
          <br />
          Tamil Nadu, India
        </p>
        <p className="mt-5 text-sm text-muted-foreground">
          Email:{" "}
          <a
            href="mailto:icahads2026@gmail.com"
            className="text-primary border-b border-accent pb-0.5 hover:text-accent"
          >
            icahads2026@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
