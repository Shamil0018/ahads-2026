import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration · AHA & DS 2026" },
      {
        name: "description",
        content:
          "Registration fees and process for the AHA & DS 2026 conference at IIT Madras.",
      },
      { property: "og:title", content: "Registration · AHA & DS 2026" },
      {
        property: "og:description",
        content: "Register for AHA & DS 2026 at IIT Madras, 15–18 December 2026.",
      },
    ],
  }),
  component: RegistrationPage,
});

const feeGroups = [
  {
    title: "Participants from Non-SAARC countries (USD)",
    rows: [
      { particular: "Faculty", early: "300", late: "350" },
      { particular: "Student / Postdoc", early: "250", late: "275" },
    ],
  },
  {
    title: "Participants from SAARC countries (USD)",
    rows: [
      { particular: "Faculty", early: "200", late: "250" },
      { particular: "Student / Postdoc", early: "100", late: "125" },
    ],
  },
];

function RegistrationPage() {
  return (
    <div className="container-prose py-20">
      <PageHeader
        eyebrow="Participation"
        title="Registration"
        intro=""
      />

      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl text-primary text-center">Registration Fees</h2>
        <div className="rule-gold w-16 mx-auto my-5" />

        <div className="overflow-x-auto border border-border rounded-sm shadow-soft">
          <table className="w-full text-left border-collapse">
            <thead className="bg-secondary/60">
              <tr className="border-b border-border text-[0.75rem] uppercase tracking-wider text-primary">
                <th className="py-4 px-6 font-semibold">Particular</th>
                <th className="py-4 px-6 font-semibold">
                  Early Registration
                  <span className="block text-[0.65rem] text-muted-foreground lowercase normal-case font-normal mt-0.5">
                    (Until August 31, 2026)
                  </span>
                </th>
                <th className="py-4 px-6 font-semibold">
                  Late Registration
                  <span className="block text-[0.65rem] text-muted-foreground lowercase normal-case font-normal mt-0.5">
                    (September 1–30, 2026)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {feeGroups.map((group) => (
                <React.Fragment key={group.title}>
                  {/* Category Header Row */}
                  <tr className="bg-secondary/35 border-b border-border font-serif">
                    <td
                      colSpan={3}
                      className="py-3.5 px-6 text-sm font-semibold text-primary"
                    >
                      {group.title}
                    </td>
                  </tr>
                  {/* Category Rows */}
                  {group.rows.map((row) => (
                    <tr
                      key={row.particular}
                      className="bg-card hover:bg-secondary/10 transition-colors border-b border-border last:border-b-0"
                    >
                      <td className="py-4 px-6 font-serif text-foreground text-sm">
                        {row.particular}
                      </td>
                      <td className="py-4 px-6 text-accent font-medium text-sm">
                        {row.early}
                      </td>
                      <td className="py-4 px-6 text-muted-foreground text-sm">
                        {row.late}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
          <span>•</span>
          <span>Registration fees include the GST charges of 18% to be paid to the Government of India.</span>
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <InfoCard
            title="How to Register"
            body="Complete the online registration form via the link below. Upload a brief biographical paragraph and, optionally, an abstract for a contributed talk or poster."
          />
          <InfoCard
            title="Payment"
            body="After your registration is reviewed, you will receive a payment link from the IIT Madras secure payment gateway. A formal receipt will follow."
          />
        </div>

        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center border border-primary bg-primary px-9 py-3.5 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ink-deep"
          >
            Open Registration Portal
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            The portal will open on <span className="text-accent">1 June 2026</span>.
          </p>
        </div>

        {/* Combined Abstracts Section */}
        <div id="abstracts" className="mt-24 pt-16 border-t border-border">
          <PageHeader
            eyebrow="Call for Abstracts"
            title="Abstract Submission"
            intro="Please submit your one-page abstract in PDF format via the online portal."
          />

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center border border-primary bg-primary px-9 py-3.5 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ink-deep"
            >
              Open Abstract Submission Portal
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              The portal will open on <span className="text-accent">1 June 2026</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-border bg-card p-7">
      <h3 className="font-serif text-xl text-primary">{title}</h3>
      <div className="rule-gold w-10 my-3" />
      <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
    </div>
  );
}

