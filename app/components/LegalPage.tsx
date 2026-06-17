import { Link } from "react-router";
import Footer from "~/components/Footer";

interface Section {
  heading: string;
  body: React.ReactNode;
}

interface Props {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalPage({ title, lastUpdated, sections }: Props) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-sm tracking-tight">
          Pavel Freelance
        </Link>
        <Link
          to="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </header>

      <main className="flex-1 mx-auto w-full max-w-2xl px-6 py-14">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-base font-semibold mb-2">{s.heading}</h2>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
