import { Link } from "react-router";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import PaymentView from "~/components/PaymentView";
import Footer from "~/components/Footer";
import type { Route } from "./+types/payment";

interface Invoice {
  id: string;
  number: string;
  amount: number;
  description: string;
  clientName: string;
  dueDate: string;
}

const MOCK_INVOICES: Record<string, Invoice> = {
  "inv-001": {
    id: "inv-001",
    number: "INV-0001",
    amount: 500,
    description: "Landing page development",
    clientName: "Acme Corp",
    dueDate: "2026-07-01",
  },
  "inv-002": {
    id: "inv-002",
    number: "INV-0002",
    amount: 2000,
    description: "Full-stack web application",
    clientName: "Globex Inc",
    dueDate: "2026-07-15",
  },
  "inv-003": {
    id: "inv-003",
    number: "INV-0003",
    amount: 4800,
    description: "API integration & automation pipeline",
    clientName: "Initech LLC",
    dueDate: "2026-08-01",
  },
};

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  const invoiceId = url.searchParams.get("invoiceId");

  if (!invoiceId) {
    return { invoice: null };
  }

  const invoice = MOCK_INVOICES[invoiceId.toLowerCase()] ?? null;
  return { invoice };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.invoice) return [{ title: "Payment – Pavel | Freelance" }];
  return [
    { title: `${loaderData.invoice.number} – Payment | Pavel Freelance` },
  ];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Payment({ loaderData }: Route.ComponentProps) {
  const { invoice } = loaderData;

  if (!invoice) {
    return (
      <div className="min-h-screen bg-muted/40 flex flex-col">
        <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-sm tracking-tight">
            Pavel Freelance
          </Link>
        </header>
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-sm space-y-4">
            <FileText className="size-10 text-muted-foreground mx-auto" />
            <h1 className="text-xl font-semibold">No invoice found</h1>
            <p className="text-sm text-muted-foreground">
              This payment link is missing an invoice ID. If you received this
              link from me, it may be incorrect or expired.
            </p>
            <p className="text-sm text-muted-foreground">
              Please{" "}
              <a
                href="mailto:contact@4life.work"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                contact me directly
              </a>{" "}
              and I'll send you the correct payment link.
            </p>
            <Link
              to="/"
              className="inline-block text-sm underline underline-offset-2 hover:text-foreground transition-colors text-muted-foreground"
            >
              ← Back to home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40 flex flex-col">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-sm tracking-tight">
          Pavel Freelance
        </Link>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="size-3.5" />
          Secure payment
        </span>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-6">

          {/* Invoice summary */}
          <div className="bg-background rounded-2xl border p-5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Invoice</p>
                <p className="font-semibold text-lg">{invoice.number}</p>
              </div>
              <div className="text-right space-y-0.5">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Amount due</p>
                <p className="font-bold text-2xl">${invoice.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Description</p>
                <p className="font-medium">{invoice.description}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Billed to</p>
                <p className="font-medium">{invoice.clientName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Due date</p>
                <p className="font-medium">{formatDate(invoice.dueDate)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">From</p>
                <p className="font-medium">Pavel Ovchinnikov</p>
              </div>
            </div>
          </div>

          {/* Payment form */}
          <div className="p-5">
            <PaymentView amount={invoice.amount} />
          </div>

          {/* Funds protected */}
          <div className="bg-background rounded-2xl border p-4 flex gap-3 items-start">
            <ShieldCheck className="size-5 text-green-600 mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Your funds are protected</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Payment is secured with 256-bit SSL encryption. Your card details are never
                stored and are processed through a PCI-DSS compliant gateway. You are
                covered by our{" "}
                <Link to="/refund-policy" className="underline underline-offset-2 hover:text-foreground">
                  refund policy
                </Link>{" "}
                if the deliverables are not met.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer invoiceNote />
    </div>
  );
}
