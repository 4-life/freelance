import LegalPage from "~/components/LegalPage";
import type { Route } from "./+types/terms";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Terms of Service – Pavel Freelance" }];
}

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="June 17, 2026"
      sections={[
        {
          heading: "1. Scope of Services",
          body: (
            <p>
              These Terms govern the freelance software development services provided by
              Pavel Ovchinnikov ("I", "me") to clients ("you"). Services include, but are
              not limited to, web application development, API design and integration,
              automation scripts, and technical consulting. The exact scope, deliverables,
              and timeline are defined in a separate project agreement or invoice before
              work begins.
            </p>
          ),
        },
        {
          heading: "2. Project Agreement",
          body: (
            <>
              <p>
                Work begins only after both parties agree on the scope of work in writing
                (email or messaging platform is sufficient). Any changes to scope after
                agreement may affect the timeline and price, and will be discussed before
                implementation.
              </p>
              <p>
                I reserve the right to decline any project without explanation.
              </p>
            </>
          ),
        },
        {
          heading: "3. Payment Terms",
          body: (
            <>
              <p>
                Pricing is project-based unless otherwise agreed. A deposit of 50% of the
                total project price is required before work begins. The remaining balance
                is due upon project completion and before final delivery of source code or
                deployment credentials.
              </p>
              <p>
                For ongoing work or retainers, invoices are issued monthly and are due
                within 14 days of issue. Late payments may result in work being paused.
              </p>
            </>
          ),
        },
        {
          heading: "4. Intellectual Property",
          body: (
            <>
              <p>
                Upon receipt of full payment, you own all deliverables produced specifically
                for your project. I retain the right to use the work in my portfolio unless
                you request otherwise in writing.
              </p>
              <p>
                Third-party libraries, frameworks, or open-source tools used in your project
                remain subject to their respective licenses. I am not responsible for
                ensuring compatibility with future versions of such tools.
              </p>
            </>
          ),
        },
        {
          heading: "5. Revisions",
          body: (
            <p>
              Each package includes a defined number of revision rounds. A revision means
              changes within the original agreed scope — it is not an opportunity to add new
              features. Additional revisions or scope changes will be quoted separately.
            </p>
          ),
        },
        {
          heading: "6. Confidentiality",
          body: (
            <p>
              I treat all project details as confidential by default. I will not share your
              business logic, data, or any non-public information with third parties. You
              agree to keep any proprietary tools, methodologies, or templates I share with
              you confidential as well.
            </p>
          ),
        },
        {
          heading: "7. Limitation of Liability",
          body: (
            <p>
              My total liability for any claim arising from the services shall not exceed
              the total amount paid for the project in question. I am not liable for
              indirect, incidental, or consequential damages including lost profits or data
              loss. It is your responsibility to maintain backups of your data and existing
              systems.
            </p>
          ),
        },
        {
          heading: "8. Termination",
          body: (
            <p>
              Either party may terminate the agreement with 7 days' written notice. Work
              completed up to the termination date will be invoiced at the agreed rate. The
              deposit is non-refundable if termination occurs after work has begun, unless
              I have failed to deliver within the agreed timeline without cause.
            </p>
          ),
        },
        {
          heading: "9. Governing Law",
          body: (
            <p>
              These Terms are governed by the laws applicable to the jurisdiction of the
              service provider. Disputes will first be addressed through good-faith
              negotiation. If unresolved, disputes shall be submitted to binding arbitration.
            </p>
          ),
        },
        {
          heading: "10. Contact",
          body: (
            <p>
              For questions about these Terms, contact me at{" "}
              <a
                href="mailto:contact@4life.work"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                contact@4life.work
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
