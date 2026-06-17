import LegalPage from "~/components/LegalPage";
import type { Route } from "./+types/refund-policy";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Refund Policy – Pavel Freelance" }];
}

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="June 17, 2026"
      sections={[
        {
          heading: "1. Overview",
          body: (
            <p>
              I stand behind the quality of my work. This policy describes the conditions
              under which refunds are available for freelance software development services
              provided by Pavel Ovchinnikov.
            </p>
          ),
        },
        {
          heading: "2. Deposits",
          body: (
            <p>
              The 50% deposit paid at the start of a project is non-refundable once work
              has commenced. This covers the time spent on project planning, architecture
              decisions, and initial development. If work has not yet started and you cancel
              within 48 hours of payment, the deposit will be refunded in full.
            </p>
          ),
        },
        {
          heading: "3. Milestone-Based Refunds",
          body: (
            <>
              <p>
                For larger projects broken into milestones, each milestone is invoiced
                separately upon completion. A milestone payment is refundable only if the
                deliverable for that milestone was not provided or materially fails to
                match the agreed specification.
              </p>
              <p>
                "Materially fails" means the delivered work does not function as described
                in the agreed specification — not a change of preference or new requirement
                added after the milestone was scoped.
              </p>
            </>
          ),
        },
        {
          heading: "4. Final Payment",
          body: (
            <p>
              The final balance is due before delivery of source code or deployment. Once
              the final deliverables have been handed over and accepted, no refund is
              available for that payment.
            </p>
          ),
        },
        {
          heading: "5. Eligibility for Refund",
          body: (
            <>
              <p>You may be eligible for a partial or full refund if:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  I fail to deliver the agreed work within a reasonable extension of the
                  agreed timeline and without valid cause
                </li>
                <li>
                  The delivered work contains critical defects that I am unable to resolve
                  within a reasonable time after being notified
                </li>
                <li>
                  The project was cancelled before any billable work began
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Non-Refundable Situations",
          body: (
            <>
              <p>Refunds are not available in the following situations:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>You change your mind about the project or no longer need it</li>
                <li>
                  You request features or changes that were outside the original agreed
                  scope
                </li>
                <li>
                  Delays were caused by your failure to provide required materials,
                  feedback, or approvals in a timely manner
                </li>
                <li>The work was completed and accepted, even informally</li>
                <li>More than 30 days have passed since delivery</li>
              </ul>
            </>
          ),
        },
        {
          heading: "7. How to Request a Refund",
          body: (
            <>
              <p>
                To request a refund, email me at{" "}
                <a
                  href="mailto:contact@4life.work"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  contact@4life.work
                </a>{" "}
                with:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Your name and invoice number</li>
                <li>The reason for the refund request</li>
                <li>
                  Evidence of the issue (screenshots, error logs, etc.) if applicable
                </li>
              </ul>
              <p>
                I will respond within 5 business days with a decision or a request for
                additional information.
              </p>
            </>
          ),
        },
        {
          heading: "8. Refund Processing",
          body: (
            <p>
              Approved refunds are processed to the original payment method within 10
              business days. Processing time may vary depending on your bank or card
              issuer.
            </p>
          ),
        },
        {
          heading: "9. Disputes",
          body: (
            <p>
              If you believe a refund was wrongly denied, please reply to the refund
              decision email to escalate. I aim to resolve all disputes through good-faith
              conversation before any formal process is initiated.
            </p>
          ),
        },
      ]}
    />
  );
}
