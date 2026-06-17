import LegalPage from "~/components/LegalPage";
import type { Route } from "./+types/privacy";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Privacy Policy – Pavel Freelance" }];
}

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="June 17, 2026"
      sections={[
        {
          heading: "1. Who I Am",
          body: (
            <p>
              This Privacy Policy explains how Pavel Ovchinnikov ("I", "me") collects,
              uses, and protects information when you use this website or engage my
              freelance services. I take your privacy seriously and collect only what is
              necessary.
            </p>
          ),
        },
        {
          heading: "2. Information I Collect",
          body: (
            <>
              <p>
                <strong className="text-foreground">Contact information</strong> — your
                name and email address when you reach out to discuss a project.
              </p>
              <p>
                <strong className="text-foreground">Project information</strong> — details
                you share about your business, requirements, and codebase in the course of
                our engagement.
              </p>
              <p>
                <strong className="text-foreground">Payment information</strong> — invoices
                record your name and the amount paid. Card details are processed by a
                third-party PCI-DSS compliant payment gateway and are never stored on my
                systems.
              </p>
              <p>
                <strong className="text-foreground">Usage data</strong> — this website may
                collect basic analytics (page views, referrer) through self-hosted tooling.
                No third-party tracking pixels or advertising networks are used.
              </p>
            </>
          ),
        },
        {
          heading: "3. How I Use Your Information",
          body: (
            <ul className="list-disc pl-4 space-y-1">
              <li>To communicate about your project and provide agreed services</li>
              <li>To issue and track invoices</li>
              <li>To comply with legal or tax obligations</li>
              <li>To improve this website based on aggregated, anonymous usage data</li>
            </ul>
          ),
        },
        {
          heading: "4. Sharing Your Information",
          body: (
            <p>
              I do not sell, rent, or share your personal data with third parties for
              marketing purposes. Your information may be shared only with service providers
              that are essential to delivering the agreed work (e.g. payment processors,
              cloud hosting). These providers are contractually required to protect your
              data and use it solely for the service provided.
            </p>
          ),
        },
        {
          heading: "5. Data Retention",
          body: (
            <p>
              Project-related communications and invoices are retained for 5 years to meet
              tax and accounting requirements, after which they are securely deleted.
              If you request deletion of your personal data and there is no legal obligation
              to retain it, I will comply within 30 days.
            </p>
          ),
        },
        {
          heading: "6. Cookies",
          body: (
            <p>
              This website uses only essential cookies required for the site to function
              (e.g. session state). No advertising or tracking cookies are used. You can
              disable cookies in your browser settings, though this may affect site
              functionality.
            </p>
          ),
        },
        {
          heading: "7. Security",
          body: (
            <p>
              All data is transmitted over HTTPS with TLS encryption. I follow
              industry-standard security practices and conduct periodic reviews of how
              data is stored and accessed.
            </p>
          ),
        },
        {
          heading: "8. Your Rights",
          body: (
            <>
              <p>You have the right to:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Access the personal data I hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data where no legal obligation exists</li>
                <li>Object to processing in certain circumstances</li>
              </ul>
              <p>To exercise any of these rights, contact me at the address below.</p>
            </>
          ),
        },
        {
          heading: "9. Changes to This Policy",
          body: (
            <p>
              I may update this Privacy Policy from time to time. The "last updated" date
              at the top of this page will reflect any changes. Continued use of this
              website after changes constitutes acceptance of the updated policy.
            </p>
          ),
        },
        {
          heading: "10. Contact",
          body: (
            <p>
              For privacy-related questions or requests, contact me at{" "}
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
