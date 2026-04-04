import React from "react";
import Button from "../components/Button.jsx";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { AnimatedBorderButton } from "../components/AnimateBorderButton.jsx";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "MySQL",
  "Redis",
  "Postman",
  "Docker",
  "AWS",
  "Vercel",
  "Ngrok",
  "Tailwind CSS",
  "Bootstrap",
  "Prisma",
  "Jest",
  "Figma",
  "Git",
  "GitHub Actions",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="green background"
          className="w-full h-full object-cover opacity-45 inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/50  to-background" />
      {/* GREEN DOTS FLOATING  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 opacity-70 rounded-full"
            style={{
              backgroundColor: "#3e4a54",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="space-y-8">
            {/* Padge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-lg text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Developer • Secure Web Applications
              </span>
            </div>
            {/* HAEDLINE */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-300">
                Develops
                <span className="text-primary glow-text animate-fade-in">
                  {" "}
                  Secure,{" "}
                </span>
                <br />
                scalable, and performance-driven <br />
                <span className="font-serif italic font-normal text-white">
                  web applications.{" "}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hi, I'm Khairya Zedan <br />
                Motivated Full-Stack Developer focused on cybersecurity and
                secure coding.Driven to apply technical expertise and creativity
                to deliver secure, high-performance solutions.
              </p>
            </div>
            {/* CALL TO ACTION SECTION */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-800">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* SOCIAL LINKS  */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-900">
              <sapn className="text-lg text-muted-foreground">Follow me: </sapn>
              {[
                { icon: "github", href: "https://github.com/khairyazedan" },
                {
                  icon: "linkedin",
                  href: "https://www.linkedin.com/in/khairya-zedan/",
                },
                {
                  icon: "twitter",
                  href: "https://www.linkedin.com/in/khairya-zedan/",
                },
              ].map((social) => (
                // <a key={idx} href={social.href}>{<social.icon />}</a>
                <div className="p-1 bg-transparent border-0 rounded-full glass hover:bg-primary transition-all duration-500">
                  <SocialIcon
                    style={{ height: 40, width: 40 }}
                    network={social.icon}
                    url={social.href}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT COLUMN - PROFILE IMAGE */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* PROFILR IMAGE */}
            <div className="relative max-w-sm mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass p-2 rounded-full glow-border">
                <img
                  src="/profile.jpeg"
                  alt="Khairya Zedan"
                  className="w-full object-cover rounded-full"
                />
                {/* FLOATING BADGE */}
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse glass" />
                    <span className="font-serif italic font-normal text-lg text-white">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* STATS BADGE */}
                <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 animation-delay-600 animate-float">
                  <div className="text-xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS SECTION */}
        <div className="mt-20 animate-fade-in animation-delay-1000">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex  animation-delay-900 animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-6 py-4 ">
                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SCROLL INDICATOR */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-900"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
