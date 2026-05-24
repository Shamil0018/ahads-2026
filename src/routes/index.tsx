import { createFileRoute, Link } from "@tanstack/react-router";
import radhaImage from "@/assets/Prof. Radha 2.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Applied Harmonic Analysis & Data Science · IIT Madras 2026" },
      {
        name: "description",
        content:
          "International conference at IIT Madras, Chennai bringing together eminent mathematicians in applied harmonic analysis and data science, 15–18 December 2026.",
      },
      {
        property: "og:title",
        content: "Applied Harmonic Analysis & Data Science · IIT Madras 2026",
      },
      {
        property: "og:description",
        content:
          "International conference at IIT Madras, Chennai · 15–18 December 2026.",
      },
    ],
  }),
  component: HomePage,
});

const speakers = [
  { name: "Akram Aldroubi", affiliation: "Vanderbilt University, USA" },
  { name: "Davide Barbieri", affiliation: "Universidad Autónoma de Madrid, Spain" },
  { name: "Biswaranjan Behera", affiliation: "ISI Kolkata, India" },
  { name: "Ayush Bhandari", affiliation: "Imperial College London, UK" },
  { name: "Alex Iosevich", affiliation: "University of Rochester, USA" },
  { name: "Felix Krahmer", affiliation: "TU Munich, Germany" },
  { name: "Franz Luef", affiliation: "Norwegian University of Science and Technology, Norway" },
  { name: "E.K. Narayanan", affiliation: "IISc Bangalore, India" },
  { name: "Rahul Parhi", affiliation: "University of California San Diego, USA" },
  { name: "Sergei Pereverzyev", affiliation: "Johann Radon Institute, Austria" },
  { name: "Niraj Kumar Shukla", affiliation: "IIT Indore, India" },
  { name: "Bharath Sriperumbudur", affiliation: "Pennsylvania State University, USA" },
  { name: "S. Thangavelu", affiliation: "IISc Bangalore, India" },
  { name: "Sergey Tikhonov", affiliation: "Centre de Recerca Matemàtica, Spain" },
  { name: "Dingxuan Zhou", affiliation: "University of Sydney, Australia" },
];

const organizers = [
  "A. Satish Kumar (Convenor)",
  "S. Sivananthan (Co-Convenor)",
  "A. Antony Selvan",
  "Ayush Bhandari",
  "Niraj Kumar Shukla",
  "Bharath Sriperumbudur",
  "Jitendriya Swain",
  "D. Venku Naidu",
];

function HomePage() {
  return (
    <div>
      {/* Welcome & Felicitation */}
      <section className="container-prose py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start max-w-5xl mx-auto">
          {/* Welcome Text, Dates, Venue, and Themes */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-2">
                Welcome
              </p>
              <p className="text-foreground/80 leading-relaxed text-base">
                We welcome you to the International Conference on{" "}
                <em className="text-foreground font-medium">Applied Harmonic Analysis and Data Science</em>,
                hosted by the Department of Mathematics at the Indian Institute of Technology Madras. This event
                brings together eminent mathematicians to share advances in harmonic analysis and modern data science.
              </p>
              <p className="mt-4 text-foreground/90 font-medium leading-relaxed text-base border-l-2 border-accent pl-4 italic">
                As part of the conference, one session will be devoted to felicitating Prof. R. Radha on the occasion of her 60th birthday.
              </p>
            </div>

            {/* Date & Venue in small font */}
            <div className="pt-6 border-t border-rule grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent font-semibold mb-1">Dates</p>
                <p className="text-sm font-semibold text-foreground">15 – 18 December 2026</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent font-semibold mb-1">Venue</p>
                <p className="text-sm font-semibold text-foreground">Indian Institute of Technology Madras, Chennai, India</p>
              </div>
            </div>

            {/* Topics / Themes listed just below welcome */}
            <div className="pt-6 border-t border-rule">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent font-semibold mb-3">Conference Themes</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/80">
                {[
                  "Harmonic analysis",
                  "Time frequency and Gabor analysis",
                  "Frames, wavelets and operator theory",
                  "Approximation theory",
                  "Sampling and reconstruction theory",
                  "Statistical learning and kernel methods",
                  "Mathematical foundations of deep learning",
                ].map((t) => (
                  <li key={t} className="flex gap-2 leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0 text-[0.6rem]">◆</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prof. R. Radha Photo */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-56 h-72 border border-border bg-card rounded-md shadow-soft overflow-hidden flex flex-col items-center justify-center relative group">
              <img
                src={radhaImage}
                alt="Prof. R. Radha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-10 text-center">
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-primary">
                  Prof. R. Radha
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="border-t border-border bg-secondary/20">
        <div className="container-prose py-16 max-w-4xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-2">
            Confirmed Speakers
          </p>
          <h2 className="font-serif text-2xl text-primary">Plenary Lectures</h2>
          <div className="rule-gold w-16 mx-auto mt-4 mb-8" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-6 max-w-5xl mx-auto text-center">
            {speakers.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                <span className="font-serif text-base font-semibold text-foreground leading-tight">{s.name}</span>
                <span className="text-[0.7rem] text-muted-foreground mt-1 line-clamp-1">{s.affiliation}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/speakers"
              className="text-xs uppercase tracking-[0.22em] text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              View Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="border-t border-border bg-background">
        <div className="container-prose py-16 max-w-4xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-2">
            Organizing Committee
          </p>
          <h2 className="font-serif text-2xl text-primary">Convened by</h2>
          <div className="rule-gold w-16 mx-auto mt-4 mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-4xl mx-auto text-center">
            {organizers.map((o) => (
              <div key={o} className="flex flex-col items-center">
                <span className="font-serif text-base font-semibold text-foreground">{o}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/committee"
              className="text-xs uppercase tracking-[0.22em] text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              View Full Committee
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/program"
              className="inline-flex items-center border border-primary px-7 py-3 text-xs uppercase tracking-[0.22em] text-primary font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Program Schedule
            </Link>
            <Link
              to="/registration"
              className="inline-flex items-center border border-primary bg-primary px-7 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground font-semibold transition-colors hover:bg-ink-deep"
            >
              Registration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

