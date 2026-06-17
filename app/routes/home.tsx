import { useState } from "react";
import { ShieldCheck, Zap } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import Footer from "~/components/Footer";
import ContactDialog from "~/components/ContactDialog";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Freelance – Pavel | Software Developer" },
    { name: "description", content: "Custom web apps, APIs and automation built by a freelance software developer." },
  ];
}

const services = [
  {
    title: "Web Application",
    description: "Full-stack web apps with React, Next.js or React Router. Fast, accessible, production-ready.",
  },
  {
    title: "REST / GraphQL API",
    description: "Node.js backends, database design, auth, and third-party integrations.",
  },
  {
    title: "Automation & Scripts",
    description: "Scraping, data pipelines, cron jobs, CI/CD — anything that should run without you.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$500",
    description: "Small landing page or simple script. Up to 3 days of work.",
    features: ["1 page / 1 script", "1 revision round", "Source code delivery"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$1 700",
    description: "Full-featured app or API. Up to 2 weeks of work.",
    features: ["Up to 5 pages / endpoints", "Auth & database", "3 revision rounds", "Deployment help"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Large projects, ongoing work or consulting. Let's talk.",
    features: ["Unlimited scope", "Web & mobile apps", "SOC 2 audit preparation", "Dedicated communication", "SLA & support plan"],
    popular: false,
  },
];

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState("");

  function openDialog(message = "") {
    setDefaultMessage(message);
    setDialogOpen(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center max-w-3xl">
        <Badge variant="secondary" className="mb-4">Available for hire</Badge>
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Software built to<br />actually work
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          I&apos;m Pavel — a freelance software developer specialising in web apps, APIs and
          automation. I take ideas from spec to shipped without the agency overhead.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => openDialog()}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Hire me
          </button>
          <a
            href="mailto:contact@4life.work"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Send an email
          </a>
        </div>
      </section>

      <Separator />

      {/* Services */}
      <section className="container mx-auto px-6 py-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">What I build</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title}>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <div className="flex gap-4 rounded-xl border bg-muted/40 p-5">
            <ShieldCheck className="size-6 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm mb-1">Security-first by default</p>
              <p className="text-sm text-muted-foreground">
                Every project follows OWASP guidelines — input validation, auth hardening,
                dependency audits, and secure defaults baked in from day one, not bolted on later.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border bg-muted/40 p-5">
            <Zap className="size-6 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm mb-1">AI-accelerated delivery</p>
              <p className="text-sm text-muted-foreground">
                I use AI tooling throughout the development cycle — code generation, test
                coverage, and review — so you get production-quality work shipped faster
                without cutting corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section className="container mx-auto px-6 py-20 max-w-5xl" id="pricing">
        <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
        <p className="text-center text-muted-foreground mb-12">
          Fixed-scope packages to keep things simple. All prices are project-based, not hourly.
        </p>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={pkg.popular ? "border-primary shadow-lg" : undefined}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle>{pkg.name}</CardTitle>
                  {pkg.popular && <Badge>Popular</Badge>}
                </div>
                <p className="text-3xl font-bold">{pkg.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm flex gap-2 items-start">
                      <span className="mt-0.5 text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openDialog(`Hi Pavel, I'm interested in the ${pkg.name} package.`)}
                  className={cn(buttonVariants({ variant: pkg.popular ? "default" : "outline" }), "w-full mt-2")}
                >
                  Get started
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer className="mt-12" />

      <ContactDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultMessage={defaultMessage}
      />
    </div>
  );
}
