import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  MessageSquare,
  Terminal,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "aditygupta6189@gmail.com",
    href: "mailto:aditygupta6189@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/adityagupta6393",
    href: "https://github.com/Adityagupta6393/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aditya-gupta-delhi",
    href: "https://www.linkedin.com/in/aditya-gupta-delhi/",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    value: "@adityagupta50",
    href: "https://x.com/adityagupta50",
    icon: FaXTwitter,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.data.success) {
        setStatus("Message sent successfully! ✓");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#02080e] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff66 1px, transparent 1px),
            linear-gradient(90deg, #00ff66 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute bottom-[-150px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#00ff66]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00ff66]/60" />

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00ff66]">
              07 // Contact
            </span>

            <span className="h-px w-10 bg-[#00ff66]/60" />
          </div>

          <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let's{" "}
            <span className="text-[#00ff66]">Build Something</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have an idea, project or opportunity? Send me a message and let's
            turn it into something useful.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-[#061018]/80 p-6 backdrop-blur-sm sm:p-8"
          >
            {/* Terminal */}
            <div className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#030a10]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                <span className="h-2 w-2 rounded-full bg-green-400/60" />

                <span className="ml-2 font-mono text-[10px] text-gray-600">
                  contact.sh
                </span>
              </div>

              <div className="p-5 font-mono text-xs leading-6">
                <p className="text-gray-600">
                  <span className="text-[#00ff66]">$</span> ./contact.sh
                </p>

                <p className="mt-3 text-gray-500">
                  Initializing connection...
                </p>

                <p className="text-gray-500">
                  Status:{" "}
                  <span className="text-[#00ff66]">AVAILABLE</span>
                </p>

                <p className="text-gray-500">
                  Response time:{" "}
                  <span className="text-white">&lt; 24h</span>
                </p>

                <p className="mt-3">
                  <span className="text-[#00ff66]">&gt;</span>{" "}
                  Let's create something great.
                  <span className="animate-pulse text-[#00ff66]">_</span>
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.015] p-4 transition-all duration-300 hover:border-[#00ff66]/30 hover:bg-[#00ff66]/[0.025]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-colors group-hover:border-[#00ff66]/30 group-hover:text-[#00ff66]">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-gray-400 transition-colors group-hover:text-white">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-gray-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00ff66]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-auto flex items-center gap-3 pt-8 font-mono text-xs text-gray-600">
              <MapPin size={15} className="text-[#00ff66]" />
              <span>India</span>
              <span className="text-gray-800">•</span>
              <span>Open to opportunities</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-[#061018]/80 p-6 backdrop-blur-sm sm:p-8"
          >
            {/* Form Header */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00ff66]/20 bg-[#00ff66]/5 text-[#00ff66]">
                <MessageSquare size={20} />
              </div>

              <div>
                <h3 className="font-mono text-lg font-semibold text-white">
                  Send a Message
                </h3>

                <p className="mt-1 font-mono text-xs text-gray-600">
                  response_time &lt; 24h
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs text-gray-500"
                  >
                    name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#030a10] px-4 py-3 font-mono text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-[#00ff66]/40 focus:ring-1 focus:ring-[#00ff66]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs text-gray-500"
                  >
                    email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#030a10] px-4 py-3 font-mono text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-[#00ff66]/40 focus:ring-1 focus:ring-[#00ff66]/20"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-xs text-gray-500"
                >
                  subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project / Opportunity / Collaboration"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#030a10] px-4 py-3 font-mono text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-[#00ff66]/40 focus:ring-1 focus:ring-[#00ff66]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-gray-500"
                >
                  message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your idea..."
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#030a10] px-4 py-3 font-mono text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-[#00ff66]/40 focus:ring-1 focus:ring-[#00ff66]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#00ff66] px-5 py-3.5 font-mono text-sm font-bold text-[#02080e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,102,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {loading
                    ? "SENDING..."
                    : status || "SEND_MESSAGE()"}
                </span>

                {!loading && <Send size={17} />}
              </button>

              {/* Status */}
              {status && !loading && (
                <p
                  className={`text-center font-mono text-xs ${
                    status.includes("successfully")
                      ? "text-[#00ff66]"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}

              <p className="text-center font-mono text-[10px] text-gray-700">
                Your message will be handled securely.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#00ff66]/10 bg-[#00ff66]/[0.02] px-5 py-4 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <Terminal size={16} className="text-[#00ff66]" />

            <span className="font-mono text-xs text-gray-500">
              connection_status:
            </span>

            <span className="font-mono text-xs text-[#00ff66]">
              ONLINE
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-gray-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff66]" />
            available_for_new_projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;