import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · AHA & DS 2026" },
      { name: "description", content: "Photo gallery for AHA & DS 2026." },
    ],
  }),
  component: GalleryPage,
});

const galleryImages = [
  { id: 1, caption: "Image 1" },
  { id: 2, caption: "Image 2" },
  { id: 3, caption: "Image 3" },
  { id: 4, caption: "Image 4" },
  { id: 5, caption: "Image 5" },
  { id: 6, caption: "Image 6" },
];

function GalleryPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="Moments"
        title="Gallery"
        intro="Photos and memories from the conference."
      />

      {uploadedImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uploadedImages.map((src, i) => (
            <div key={i} className="group relative">
              <div className="w-full h-64 rounded-sm bg-muted border border-border flex items-center justify-center overflow-hidden shadow-soft">
                <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-sm bg-secondary/10">
          <span className="font-serif text-base text-muted-foreground italic">To be added</span>
        </div>
      )}

      {/* 
      <div className="max-w-xl mx-auto mt-16">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-lg cursor-pointer bg-background hover:bg-muted/50 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
            <svg
              className="w-8 h-8 mb-4 text-accent"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Click to upload</span> or drag and drop photos
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG or WEBP (MAX. 5MB)</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*" 
            multiple 
            onChange={(e) => {
              if (e.target.files) {
                const files = Array.from(e.target.files);
                const urls = files.map(file => URL.createObjectURL(file));
                setUploadedImages(prev => [...prev, ...urls]);
              }
            }} 
          />
        </label>
      </div>
      */}
    </div>
  );
}
