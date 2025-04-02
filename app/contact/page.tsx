import { ContactForm } from "@/components/ui/contact-form"
import { ContactInfo } from "@/components/ui/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We're here to help with any questions or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Fill out the form below or use our contact
            information to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

          
