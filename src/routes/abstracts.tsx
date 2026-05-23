import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/abstracts")({
  beforeLoad: () => {
    throw redirect({
      to: "/registration",
      hash: "abstracts",
      replace: true,
    });
  },
});

