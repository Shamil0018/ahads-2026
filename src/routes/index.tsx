import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero_light.png";
import radhaImage from "@/assets/Prof. Radha 2.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Applied Harmonic Analysis & Data Science · IIT Madras 2026" },
      {
        name: "description",
        content:
          "International conference at IIT Madras, Chennai bringing together leading researchers in applied harmonic analysis and data science, 15–18 December 2026.",
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
  { name: "Ayush Bhandari", affiliation: "Imperial College London, UK" },
  { name: "Alex Iosevich", affiliation: "University of Rochester, USA" },
  { name: "Franz Luef", affiliation: "Norwegian Univ. of Science and Technology, Norway" },
  { name: "Sergei Pereverzyev", affiliation: "Johann Radon Institute, Austria" },
  { name: "Bharath Sriperumbudur", affiliation: "Pennsylvania State University, USA" },
  { name: "Dingxuan Zhou", affiliation: "University of Sydney, Australia" },
];

const organizers = [
  "A. Antony Selvan",
  "Ayush Bhandari",
  "A. Satish Kumar",
  "Niraj Kumar Shukla",
  "S. Sivananthan",
  "Bharath Sriperumbudur",
  "Jitendriya Swain",
  "D. Venku Naidu",
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Harmonic waves"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="container-prose relative py-24 md:py-32 text-center">
          <p className="text-[0.75rem] uppercase tracking-[0.4em] font-semibold text-accent">
            International Conference · 2026
          </p>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl font-bold leading-[1.1] text-foreground">
            Applied Harmonic Analysis
            <span className="block italic font-normal text-foreground/80">&amp; Data Science</span>
          </h1>
          <div className="rule-gold w-40 mx-auto my-7" />
          <p className="font-serif text-xl md:text-2xl font-bold text-foreground">
            15 – 18 December 2026
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Indian Institute of Technology Madras · Chennai, India
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/program"
              className="inline-flex items-center border border-primary px-7 py-3 text-xs uppercase tracking-[0.22em] text-primary font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Program
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome & Felicitation */}
      <section className="container-prose py-20">
        <div className="grid md:grid-cols-3 gap-10 items-center max-w-5xl mx-auto">
          {/* Welcome Text */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-2">
              Welcome
            </p>
            <p className="text-foreground/80 leading-relaxed text-base">
              We welcome you to the International Conference on{" "}
              <em className="text-foreground font-medium">Applied Harmonic Analysis and Data Science</em>,
              hosted by the Department of Mathematics at the Indian Institute of Technology Madras. This event
              brings together leading researchers to share advances in harmonic analysis, sampling theory,
              machine learning, and modern data science.
            </p>
            <p className="text-foreground/90 font-medium leading-relaxed text-base border-l-2 border-accent pl-4 italic">
              As part of the conference, one session will be devoted to felicitating Prof. R. Radha on the occasion of her 60th birthday.
            </p>
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
      {/* Topics */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose py-16 max-w-4xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-4">Themes</p>
          <h2 className="font-serif text-3xl text-primary">Topics of the Conference</h2>
          <div className="rule-gold w-24 mx-auto my-6" />
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-foreground mt-8 text-left">
            {[
              "Sampling and reconstruction theory",
              "Time–frequency and Gabor analysis",
              "Frames, wavelets and operator theory",
              "Statistical learning and kernel methods",
              "Inverse problems and regularization",
              "Compressed sensing and sparse representations",
              "Signal processing and unlimited sampling",
              "Mathematical foundations of deep learning",
            ].map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <span className="text-accent mt-2 shrink-0">◆</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Speakers */}
      <section className="container-prose py-20 max-w-4xl text-center">
        <div className="text-center mb-6">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-4">
            Confirmed Speakers
          </p>
          <h2 className="font-serif text-3xl text-primary">Plenary Lectures</h2>
          <div className="rule-gold w-24 mx-auto mt-5" />
        </div>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 font-serif text-lg text-foreground">
          {speakers.map((s, i) => (
            <li key={s.name} className="flex items-center gap-8">
              <span>{s.name}</span>
              {i < speakers.length - 1 && (
                <span className="text-accent hidden sm:inline">·</span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            to="/speakers"
            className="text-xs uppercase tracking-[0.22em] text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            View Full Speakers
          </Link>
        </div>
      </section>

      {/* Organizers */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-16 max-w-4xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-4">
            Organizing Committee
          </p>
          <h2 className="font-serif text-3xl text-primary">Convened by</h2>
          <div className="rule-gold w-24 mx-auto my-6" />
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6 font-serif text-lg text-foreground">
            {organizers.map((o, i) => (
              <li key={o} className="flex items-center gap-8">
                {o}
                {i < organizers.length - 1 && (
                  <span className="text-accent hidden sm:inline">·</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/committee"
              className="text-xs uppercase tracking-[0.22em] text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              View Full Committee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

