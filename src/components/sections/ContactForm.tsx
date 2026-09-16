"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from "lucide-react";
import Button from "../ui/Button";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide a brief description of your project.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate client-side processing/validation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200/80 p-8 sm:p-10 shadow-lg shadow-emerald-500/5 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Received!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>.
          Our founding team will review your project requirements and respond to{" "}
          <span className="font-semibold text-slate-900">{formData.email}</span> within 24 business hours.
        </p>
        <div className="p-4 bg-slate-50 rounded-xl max-w-md mx-auto text-xs text-slate-500 mb-6 border border-slate-200">
          <p className="font-semibold text-slate-700 mb-1">Inquiry Summary:</p>
          <p>Type: {formData.projectType} • Scope: Client-side validation verified</p>
        </div>
        <Button variant="outline" size="md" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
      <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4" />
        <span>Project Intake Form</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Tell Us About Your Project
      </h3>
      <p className="text-sm text-slate-600 mb-8">
        Fill out the details below. We review every submission personally and respond with initial architecture thoughts and estimates.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Your Name <span className="text-emerald-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Maya Shrestha"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                errors.name
                  ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                  : "border-slate-300 hover:border-slate-400"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Work Email <span className="text-emerald-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="maya@company.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                errors.email
                  ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                  : "border-slate-300 hover:border-slate-400"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Project Type & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Project Type <span className="text-emerald-600">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                errors.projectType
                  ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                  : "border-slate-300 hover:border-slate-400"
              }`}
            >
              <option value="">Select service category...</option>
              <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
              <option value="Web Application Development">Web Application Development (Next.js / SaaS)</option>
              <option value="IT Services & Cloud Consulting">IT Services & Cloud Consulting</option>
              <option value="Maintenance & Support">Maintenance & Long-Term Support</option>
              <option value="Custom Software / Other">Custom Software / Other</option>
            </select>
            {errors.projectType && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.projectType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Estimated Budget <span className="text-xs font-normal text-slate-400">(Optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            >
              <option value="">Select estimated budget...</option>
              <option value="Under $5,000">Under $5,000 (MVP / Prototype)</option>
              <option value="$5,000 – $15,000">$5,000 – $15,000 (Standard Product Build)</option>
              <option value="$15,000 – $35,000">$15,000 – $35,000 (Full-Scale Mobile/Web Platform)</option>
              <option value="$35,000+">$35,000+ (Enterprise & Multi-Quarter Engagement)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Project Details & Goals <span className="text-emerald-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you are building, target timeline, key integrations, or any existing repositories..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
              errors.message
                ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                : "border-slate-300 hover:border-slate-400"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
            rightIcon={
              isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
          >
            {isSubmitting ? "Validating & Sending..." : "Submit Project Inquiry"}
          </Button>
          <span className="block sm:inline sm:ml-4 text-xs text-slate-500 mt-2 sm:mt-0">
            No spam. Direct confidential response within 24 hours.
          </span>
        </div>
      </form>
    </div>
  );
}
