import { Link } from "react-router";
import { FileText } from "lucide-react";

interface Props {
  invoiceNote?: boolean;
  className?: string;
}

export default function Footer({ invoiceNote = false, className = "" }: Props) {
  return (
    <footer className={`border-t bg-background ${className}`}>
      <div className="mx-auto px-6 py-6 space-y-3">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:text-foreground transition-colors">
            Refund Policy
          </Link>
          <a
            href="mailto:contact@4life.work"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {invoiceNote && (
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <FileText className="size-3.5 shrink-0" />
            <span>
              Invoice payments are processed securely. By paying you agree to the{" "}
              <Link
                to="/terms"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Terms of Service
              </Link>
              .
            </span>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pavel Ovchinnikov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
