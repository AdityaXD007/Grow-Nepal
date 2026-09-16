import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-50/50 bg-grid-pattern">
      <Container size="small">
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-lg mx-auto">
          <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-100 font-mono font-black text-2xl">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or is under development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
