import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

// Imports for speaker images
import imgAldroubi from "@/assets/Akraum Aldroubi.jpeg";
import imgBarbieri from "@/assets/Davide Barbieri.jpeg";
import imgBehera from "@/assets/Biswaranjan Behera.jpg";
import imgBhandari from "@/assets/Ayush Bhandari.jpeg";
import imgIosevich from "@/assets/Alex Iosevich.jpeg";
import imgKrahmer from "@/assets/Felix Krahmer.jpg";
import imgLuef from "@/assets/Franz Luef.jpg";
import imgNarayanan from "@/assets/E.K. Narayanan.jpg";
import imgParhi from "@/assets/Rahul Parhi.webp";
import imgPereverzyev from "@/assets/Sergei Pereverzyev.jpeg";
import imgShukla from "@/assets/Niraj Kumar Shukla.png";
import imgSriperumbudur from "@/assets/Bharath Sriperumbudur.jpg";
import imgThangavelu from "@/assets/S. Thangavelu.jpg";
import imgTikhonov from "@/assets/Sergey Tikhonov.jpeg";
import imgZhou from "@/assets/Dingxuan Zhou.webp";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers · AHA & DS 2026" },
      { name: "description", content: "Invited speakers for AHA & DS 2026." },
    ],
  }),
  component: SpeakersPage,
});

const speakers = [
  {
    name: "Akram Aldroubi",
    affiliation: "Vanderbilt University, USA",
    image: imgAldroubi,
  },
  {
    name: "Davide Barbieri",
    affiliation: "Universidad Autónoma de Madrid, Spain",
    image: imgBarbieri,
  },
  {
    name: "Biswaranjan Behera",
    affiliation: "ISI Kolkata, India",
    image: imgBehera,
  },
  {
    name: "Ayush Bhandari",
    affiliation: "Imperial College London, UK",
    image: imgBhandari,
  },
  {
    name: "Alex Iosevich",
    affiliation: "University of Rochester, USA",
    image: imgIosevich,
  },
  {
    name: "Felix Krahmer",
    affiliation: "TU Munich, Germany",
    image: imgKrahmer,
  },
  {
    name: "Franz Luef",
    affiliation: "Norwegian University of Science and Technology, Norway",
    image: imgLuef,
  },
  {
    name: "E.K. Narayanan",
    affiliation: "IISc Bangalore, India",
    image: imgNarayanan,
  },
  {
    name: "Rahul Parhi",
    affiliation: "University of California San Diego, USA",
    image: imgParhi,
  },
  {
    name: "Sergei Pereverzyev",
    affiliation: "Johann Radon Institute, Austria",
    image: imgPereverzyev,
  },
  {
    name: "Niraj Kumar Shukla",
    affiliation: "IIT Indore, India",
    image: imgShukla,
  },
  {
    name: "Bharath Sriperumbudur",
    affiliation: "Pennsylvania State University, USA",
    image: imgSriperumbudur,
  },
  {
    name: "S. Thangavelu",
    affiliation: "IISc Bangalore, India",
    image: imgThangavelu,
  },
  {
    name: "Sergey Tikhonov",
    affiliation: "Centre de Recerca Matemàtica, Spain",
    image: imgTikhonov,
  },
  {
    name: "Dingxuan Zhou",
    affiliation: "University of Sydney, Australia",
    image: imgZhou,
  },
];

function SpeakersPage() {
  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="Invited Speakers"
        title="Speakers"
        intro="Distinguished experts presenting at the conference."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 mt-16 justify-items-center">
        {speakers.map((speaker, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-border shadow-sm flex items-center justify-center bg-muted mb-3.5 relative group">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-sm font-semibold text-foreground text-center leading-snug">
              {speaker.name}
            </h3>
            <p className="text-[0.7rem] text-muted-foreground text-center mt-1.5 leading-tight max-w-[130px]">
              {speaker.affiliation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
