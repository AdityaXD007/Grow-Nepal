import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/sections/ContactForm";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { companyData } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Grow Nepal. Start a mobile app, web development, or IT consulting project with our founder-led engineering team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Header */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="emerald" dot size="md" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Let's Build Something Exceptional Together
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Whether you are kicking off a new mobile application, modernizing an existing
              web platform, or seeking cloud consulting, our team is ready to assist.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Main Content */}
      <Section variant="default" padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Contact Info (lg:span 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 mb-2 block">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Talk to Our Leadership
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We don't use commission-driven sales reps. Your initial conversation will be
                  directly with one of our founding software architects.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email card */}
                <Card className="p-5 border-slate-200/90 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Us Directly
                    </span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Average response: &lt; 24 hours
                    </p>
                  </div>
                </Card>

                {/* Phone & WhatsApp card */}
                <Card className="p-5 border-slate-200/90 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${companyData.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors block"
                    >
                      {companyData.contact.phone}
                    </a>
                    <span className="text-xs text-slate-500 block">
                      WhatsApp: {companyData.contact.whatsapp}
                    </span>
                  </div>
                </Card>

                {/* Location card */}
                <Card className="p-5 border-slate-200/90 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Headquarters
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {companyData.contact.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Serving clients worldwide across all timezones
                    </p>
                  </div>
                </Card>

                {/* Office Hours */}
                <Card className="p-5 border-slate-200/90 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Working Hours
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {companyData.contact.availability}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Overnight & 24/7 on-call for SLA production clients
                    </p>
                  </div>
                </Card>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Socials
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={companyData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={companyData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-[#0A66C2] hover:text-white text-slate-700 transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={companyData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-black hover:text-white text-slate-700 transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                    <TwitterIcon className="w-4 h-4" />
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Client-Side Form (lg:span 7) */}
            <div className="lg:col-span-7">
              <ContactForm />

              {/* What happens next guarantee */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>What to Expect After Inquiring</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">1. NDA (If Required)</p>
                    <p>We are happy to countersign mutual NDAs before any sensitive product sharing.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">2. Discovery Call</p>
                    <p>A 30-minute technical roadmap call directly with our principal architect.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">3. Proposal & Sprints</p>
                    <p>Clear, fixed-price or sprint-based proposal with transparent milestones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
