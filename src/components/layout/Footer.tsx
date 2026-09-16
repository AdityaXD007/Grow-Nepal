import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import Container from "./Container";
import { companyData, navLinks } from "@/lib/data/company";
import { servicesData } from "@/lib/data/services";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col (lg:span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
                <div className="h-9 w-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-lg">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                    Grow<span className="text-emerald-400">Nepal</span>
                  </span>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 mt-0.5">
                    Software & IT
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                {companyData.valueProposition} We partner with ambitious startups and
                modern enterprises to engineer reliable mobile apps, web systems, and cloud
                infrastructure.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Operating globally from Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={companyData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (lg:span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (lg:span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct (lg:span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{companyData.contact.location}</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <p className="text-xs text-slate-400">
                Ready to kick off? Let's discuss your roadmap today.
              </p>
              <Link
                href="/contact"
                className="mt-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
              >
                <span>Request consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {companyData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Engineered with care and ambition in Nepal</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 inline" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
