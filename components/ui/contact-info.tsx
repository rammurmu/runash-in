import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-muted-foreground">
                310 RunAsh AI Business Avenue
                <br />
                Bokaro Industrial Area 3
                <br />
                Bharat, JH 827014
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+06542253096" className="hover:text-primary">
                  +91 (06542) 253096
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:admin@runash.in" className="hover:text-primary">
                  admin@runash.in
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 9:00 PM
                <br />
                Saturday: 10:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://facebook.com/runash" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://twitter.com/runash" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://instagram.com/runash" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/runash" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          {/* Replace with your actual map embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143067466!2d-122.41941638468173!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085a4d3c499%3A0x9ccd8c3f5a4f7a3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

      
