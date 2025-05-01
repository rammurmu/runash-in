import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - RunAsh AI",
  description: "RunAsh AI Terms of Service and User Agreement",
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-muted-foreground">Last updated: April 06, 2025</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            Welcome to RunAsh AI. These Terms of Service ("Terms") govern your access to and use of the RunAsh AI
            platform, including our website, services, and applications (collectively, the "Service"). By accessing or
            using the Service, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms, you may not access or use the Service.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as
            by sending an email notification, providing notice through the Service, or updating the "Last Updated" date
            at the beginning of these Terms. Your continued use of the Service following notification of changes will
            constitute your acceptance of such changes.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To access certain features of the Service, you may be required to register for an account. When you
            register, you agree to provide accurate, current, and complete information about yourself. You are
            responsible for safeguarding your account credentials and for any activity that occurs under your account.
          </p>

          <h2>4. User Types and Requirements</h2>
          <p>The Service offers different user types with specific requirements:</p>
          <ul>
            <li>
              <strong>Creators:</strong> Must complete an application process and may be subject to identity
              verification. Creators must comply with our Content Guidelines.
            </li>
            <li>
              <strong>Sellers:</strong> Must complete an application process and may be subject to identity
              verification. Sellers must comply with our Marketplace Guidelines.
            </li>
            <li>
              <strong>Buyers:</strong> Must provide accurate payment information when making purchases.
            </li>
            <li>
              <strong>Businesses:</strong> Must provide accurate business information and comply with applicable laws
              and regulations.
            </li>
          </ul>

          <h2>5. Content Guidelines</h2>
          <p>
            You are responsible for all content that you post, upload, or otherwise make available through the Service.
            Content must not:
          </p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Infringe upon the rights of others</li>
            <li>Contain harmful, threatening, abusive, or harassing content</li>
            <li>Promote discrimination, bigotry, racism, or hatred</li>
            <li>Contain sexually explicit or violent material</li>
            <li>Promote illegal activities</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by RunAsh AI and are protected
            by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2>7. User Content License</h2>
          <p>
            By posting content on the Service, you grant RunAsh AI a non-exclusive, transferable, sub-licensable,
            royalty-free, worldwide license to use, modify, publicly perform, publicly display, reproduce, and
            distribute such content on and through the Service.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or
            liability, for any reason, including if you breach these Terms.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            In no event shall RunAsh AI, its directors, employees, partners, agents, suppliers, or affiliates be liable
            for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
            inability to access or use the Service.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of [Jurisdiction], without regard to its conflict of law
            provisions.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:legal@runash.ai" className="text-orange-600 hover:underline dark:text-orange-400">
              legal@runash.ai
            </Link>
          </p>
        </div>

        <div className="rounded-lg border bg-muted/20 p-4">
          <p className="text-sm text-muted-foreground">
            By using RunAsh AI, you acknowledge that you have read and understood these Terms of Service and agree to be
            bound by them.
          </p>
        </div>
      </div>
    </div>
  )
}
