import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · AHA & DS 2026" },
      {
        name: "description",
        content: "Contact details and location for the AHA & DS 2026 conference at IIT Madras.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        intro=""
      />

      <div className="max-w-xl mx-auto mt-16 space-y-12">
        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-8 border-y border-border py-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Address</h3>
            <p className="font-serif text-lg text-foreground leading-relaxed">
              Department of Mathematics<br />
              Indian Institute of Technology Madras<br />
              Sardar Patel Road, Chennai 600036, India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+914422574600"
                className="font-serif text-lg text-primary hover:text-accent transition-colors block"
              >
                +91 44 2257 4600
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:ahads2026@iitm.ac.in"
                className="font-serif text-lg text-primary hover:text-accent transition-colors block"
              >
                ahads2026@iitm.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">Location</h3>
          <div className="border border-border p-1 bg-card rounded-sm overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0003444062137!2d80.2311099!3d12.9866144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267da344c2079%3A0xe54d896173c05c6d!2sDepartment%20of%20Mathematics%2C%20IIT%20Madras!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin"
              className="w-full h-80 border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
