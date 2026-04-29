"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Layers,
  ArrowRight,
  Check,
  Star,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Bot,
  Workflow,
  TrendingUp,
  Clock,
  Users,
  Rocket,
  Building2,
  Briefcase,
  UserCheck,
  Play,
  MessageSquare,
  LineChart,
  Settings,
  Cpu,
} from "lucide-react";

/* ───────────────────────── Scroll Animation Wrapper ───────────────────────── */
function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────── Navbar ───────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-teal-400">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              NexusAI
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/50 transition-colors hover:bg-white/5 hover:text-white/90"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="ghost"
              className="text-sm text-white/60 hover:text-white hover:bg-white/5"
            >
              Log In
            </Button>
            <Button className="h-9 px-5 text-sm bg-gradient-to-r from-violet-600 to-teal-500 text-white border-0 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:brightness-110 transition-all">
              Try Nexus AI
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white/60 hover:bg-white/5 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="glass rounded-2xl p-5 mb-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button
                variant="ghost"
                className="w-full justify-start text-white/60"
              >
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-teal-500 text-white border-0">
                Try Nexus AI Now
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

/* ───────────────────────── Hero Section ───────────────────────── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* BG Effects */}
      <div className="absolute inset-0 noise-overlay">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-[15%] left-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px] animate-pulse-glow" />
        <div
          className="absolute bottom-[15%] right-[20%] h-[400px] w-[400px] rounded-full bg-teal-500/15 blur-[140px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Now trusted by 2,400+ teams worldwide
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Automate Your Workflow with{" "}
            <span className="gradient-text">AI</span>{" "}
            — Save Hours Every Week
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/45 sm:text-xl leading-relaxed"
          >
            Stop wasting time on repetitive tasks. Nexus AI automates your workflows,
            boosts team productivity, and drives growth — so you can focus on what actually matters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold bg-gradient-to-r from-violet-600 to-teal-500 text-white border-0 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 transition-all"
            >
              Try Nexus AI Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-white/15 text-white/75 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm group"
            >
              <Play className="mr-2 h-4 w-4 text-violet-400 group-hover:text-violet-300 transition-colors" />
              View Demo
            </Button>
          </motion.div>

          {/* Micro social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["EJ", "AK", "MR", "SL", "JT"].map((i) => (
                <Avatar
                  key={i}
                  className="h-8 w-8 border-2 border-background bg-gradient-to-br from-violet-500/80 to-teal-400/80"
                >
                  <AvatarFallback className="text-[10px] font-semibold text-white">
                    {i}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-white/40">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-white/60 font-medium">4.9</span> from 800+ reviews
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── Demo Section ───────────────────────── */
function DemoSection() {
  return (
    <section className="relative pb-24 -mt-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white/90">
            See Nexus AI in Action
          </h2>
          <p className="mt-2 text-sm text-white/35">
            A powerful dashboard designed for speed, clarity, and smart decision-making.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-teal-500/10 to-violet-600/20 blur-3xl rounded-3xl" />

            <div className="relative glass rounded-2xl p-1.5 shadow-2xl shadow-violet-500/10">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0d0b1a] to-[#0a1628]">
                {/* Fake browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-4 py-1.5 text-xs text-white/30">
                      <Globe className="h-3 w-3" />
                      app.nexusai.com/dashboard
                    </div>
                  </div>
                </div>
                <img
                  src="/demo-dashboard.png"
                  alt="NexusAI Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────── Trusted By Section ───────────────────────── */
function TrustedBySection() {
  const companies = [
    "Stripe",
    "Linear",
    "Vercel",
    "Notion",
    "Figma",
    "Slack",
  ];
  return (
    <section className="relative py-16 border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/25 mb-10">
            Trusted by teams at world-class companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {companies.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-xl font-bold text-white/[0.12] hover:text-white/25 transition-colors duration-300 tracking-tight"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────── Features Section ───────────────────────── */
const features = [
  {
    icon: Bot,
    title: "AI-Powered Workflows",
    description: "Automate repetitive tasks with intelligent AI that learns and adapts",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Get real-time insights and predictions from your data instantly",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Go live in under 5 minutes with zero technical knowledge required",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 certified with end-to-end encryption for complete protection",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "200+ Integrations",
    description: "Connect with every tool your team already uses, out of the box",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared workflows and real-time sync",
    gradient: "from-sky-400 to-blue-500",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">work faster</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/35">
            Powerful tools designed to save time, boost productivity, and let your
            team focus on what matters most.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <Card className="group relative h-full bg-white/[0.02] border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-500 cursor-default overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${f.gradient} opacity-[0.06] blur-3xl`}
                  />
                </div>
                <CardContent className="relative p-6">
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} shadow-lg`}
                  >
                    <f.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-white/90 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {f.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── How It Works ───────────────────────── */
const steps = [
  {
    icon: Layers,
    title: "Connect Your Tools",
    description:
      "Link your existing apps and data sources in just a few clicks. Works with 200+ tools out of the box.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Settings,
    title: "Set Your Workflow",
    description:
      "Define what to automate using our visual builder. No coding required — just point, click, and configure.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    icon: Rocket,
    title: "Let AI Automate",
    description:
      "Sit back while NexusAI handles the rest. It learns, adapts, and gets smarter with every task it completes.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-transparent via-violet-950/[0.07] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs text-teal-300"
          >
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Up and running in{" "}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/35">
            No complex setup. No technical skills needed. Start automating in
            under 5 minutes.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center h-full">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+36px)] w-[calc(100%-72px)] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-white/[0.08] to-white/[0.03]" />
                    <ArrowRight className="absolute -right-1 -top-1 h-2 w-2 text-white/10" />
                  </div>
                )}

                {/* Icon circle */}
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-2xl ${step.bg} border ${step.border} mb-6`}
                >
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 shadow-lg">
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Use Cases Section ───────────────────────── */
const useCases = [
  {
    icon: Building2,
    title: "For Businesses",
    description:
      "Automate reporting, streamline approvals, and eliminate manual data entry across departments.",
    benefits: [
      "Reduce operational costs by 40%",
      "Automate cross-team workflows",
      "Real-time business intelligence",
    ],
    gradient: "from-violet-500/20 to-purple-600/20",
    accent: "text-violet-400",
  },
  {
    icon: Rocket,
    title: "For Startups",
    description:
      "Ship faster with AI that handles the repetitive work so your small team can punch above its weight.",
    benefits: [
      "Launch 3x faster with AI automation",
      "Do the work of 5 people with 2",
      "Scale without growing headcount",
    ],
    gradient: "from-teal-500/20 to-cyan-600/20",
    accent: "text-teal-400",
  },
  {
    icon: Briefcase,
    title: "For Freelancers",
    description:
      "Impress clients, deliver faster, and take on more projects without burning out.",
    benefits: [
      "Handle 2x more clients effortlessly",
      "Automate client reporting",
      "Professional results every time",
    ],
    gradient: "from-amber-500/20 to-orange-600/20",
    accent: "text-amber-400",
  },
];

function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300"
          >
            Use Cases
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for every{" "}
            <span className="gradient-text">type of team</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/35">
            Whether you're a Fortune 500 company or a solo freelancer, NexusAI
            adapts to your workflow.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.title} delay={i * 0.1}>
              <Card className="group relative h-full bg-white/[0.02] border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 overflow-hidden">
                {/* BG gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${uc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardContent className="relative p-8">
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}
                  >
                    <uc.icon className={`h-6 w-6 ${uc.accent}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed mb-5">
                    {uc.description}
                  </p>
                  <ul className="space-y-2.5">
                    {uc.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-white/45"
                      >
                        <Check className={`h-4 w-4 shrink-0 ${uc.accent}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Stats Strip ───────────────────────── */
const stats = [
  { value: "10h+", label: "Saved per week", icon: Clock },
  { value: "3.2B", label: "Tasks automated", icon: Cpu },
  { value: "2,400+", label: "Teams onboard", icon: Users },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
];

function StatsSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <div className="glass rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <s.icon className="mb-3 h-5 w-5 text-violet-400" />
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-white/30">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing Section ───────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "29",
    description: "For individuals and small projects getting started.",
    features: [
      "Up to 3 team members",
      "5,000 AI tasks / month",
      "3 workflow automations",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "79",
    description: "For growing teams that need powerful AI capabilities.",
    features: [
      "Up to 25 team members",
      "100,000 AI tasks / month",
      "Unlimited workflows",
      "Advanced analytics & reports",
      "Priority support (< 4h)",
      "API access",
      "200+ integrations",
    ],
    cta: "Try Nexus AI Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For organizations needing full AI power and dedicated support.",
    features: [
      "Unlimited team members",
      "Unlimited AI tasks",
      "Custom AI model training",
      "Dedicated account manager",
      "24/7 phone & chat support",
      "SLA guarantee",
      "On-premise option",
      "White-label ready",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-300"
          >
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/35">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card
                className={`relative h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-violet-500/40 bg-violet-500/[0.06] shadow-xl shadow-violet-500/10 scale-[1.02] lg:scale-105"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.14]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-violet-600 to-teal-500 text-white border-0 px-4 py-1 text-xs font-semibold shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="flex-1 flex flex-col p-7">
                  <div className="mb-1">
                    <h3 className="text-lg font-semibold text-white/90">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/35">
                      {plan.description}
                    </p>
                  </div>

                  <div className="my-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-white/25 ml-1">/month</span>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/40"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-8 h-11 text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-teal-500 text-white border-0 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:brightness-110"
                        : "bg-white/5 border-white/10 text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials Section ───────────────────────── */
const testimonials = [
  {
    quote:
      "We cut our weekly reporting time from 12 hours to under 30 minutes. NexusAI paid for itself in the first week.",
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow",
    initials: "SC",
  },
  {
    quote:
      "As a startup with 4 people, NexusAI lets us compete with teams 10x our size. The AI workflows are genuinely incredible.",
    name: "Marcus Rivera",
    role: "Co-Founder & CTO",
    company: "DataPrime",
    initials: "MR",
  },
  {
    quote:
      "I handle twice as many freelance clients now. The automation handles the boring stuff so I can focus on creative work.",
    name: "Elena Johansson",
    role: "Freelance Consultant",
    company: "Independent",
    initials: "EJ",
  },
];

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-transparent via-teal-950/[0.04] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
          >
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Loved by teams{" "}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/35">
            Real results from real teams using NexusAI every day.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <Card className="h-full bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                <CardContent className="p-7">
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="mb-6 text-[15px] text-white/55 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <Avatar className="h-10 w-10 bg-gradient-to-br from-violet-500 to-teal-500">
                      <AvatarFallback className="text-xs font-semibold text-white">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-white/85">
                        {t.name}
                      </div>
                      <div className="text-xs text-white/30">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ Section ───────────────────────── */
const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get full access to all Pro features for 14 days, no credit card required. Explore everything, build workflows, and see results before committing.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, cancel anytime with one click. No penalties, no questions asked. Your access continues until the end of your billing period.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. SOC 2 Type II certified, AES-256 encryption at rest, TLS 1.3 in transit. Your data is never used to train AI models.",
  },
  {
    q: "Do I need technical skills?",
    a: "Not at all. Our visual builder lets anyone create AI automations without code. For technical teams, we also offer a full API and CLI.",
  },
  {
    q: "What integrations are supported?",
    a: "We support 200+ tools including Slack, Salesforce, HubSpot, Jira, GitHub, Google Workspace, and more. Custom integrations via API/webhooks.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Common questions
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-white/[0.06] rounded-lg px-5 data-[state=open]:bg-white/[0.02] transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-white/70 hover:text-white py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/35 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────── Final CTA Section ───────────────────────── */
function CTASection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-teal-500/10 to-amber-500/10" />
            <div className="absolute inset-0 noise-overlay" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-violet-600/30 blur-[100px]" />

            <div className="relative glass rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-teal-500 shadow-lg shadow-violet-500/30">
                <Bot className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
                Ready to save hours every week?
              </h2>
              <p className="mt-4 mx-auto max-w-lg text-base text-white/45">
                Join 2,400+ teams already using Nexus AI. Start your free trial
                today — no credit card required.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-12 px-10 text-base font-semibold bg-gradient-to-r from-violet-600 to-teal-500 text-white border-0 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 transition-all"
                >
                  Try Nexus AI Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-10 text-base border-white/15 text-white/70 bg-white/5 hover:bg-white/10 hover:text-white group"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-teal-400 group-hover:text-teal-300" />
                  Talk to Sales
                </Button>
              </div>
              <p className="mt-6 text-xs text-white/25">
                Free 14-day trial &middot; No credit card &middot; Cancel anytime
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  const cols = {
    Product: ["Features", "Pricing", "Integrations", "API Docs", "Changelog"],
    Company: ["About", "Careers", "Blog", "Press"],
    Resources: ["Documentation", "Community", "Tutorials", "Status"],
    Legal: ["Privacy", "Terms", "Security", "GDPR"],
  };

  return (
    <footer className="border-t border-white/[0.05] bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-teal-400">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">NexusAI</span>
            </a>
            <p className="text-sm text-white/25 max-w-xs leading-relaxed">
              AI-powered automation that saves your team 10+ hours every week.
            </p>
          </div>
          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
                {cat}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/25 hover:text-white/50 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.05] pt-8">
          <p className="text-xs text-white/20">
            &copy; 2026 NexusAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/20">
            <Shield className="h-3 w-3" />
            SOC 2 Certified &middot; GDPR Compliant &middot; 99.9% Uptime
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Main Page ───────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DemoSection />
        <TrustedBySection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
