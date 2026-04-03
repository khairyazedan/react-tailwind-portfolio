import React from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200 text-secondary-foreground">
              Building secure applications,
              <span className="font-serif italic font-normal text-white">
                {" "}
                One component at a time.
              </span>
            </h2>
            {/* PARAGRAPH */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-300">
              <p>
                Passionate full-stack developer with a unique background that
                started in commerce and fashion design, bringing a creative and
                analytical perspective into the world of technology. The journey
                into development was driven by curiosity about how digital
                systems work and how they can be improved.
              </p>
              <p>
                Currently focused on building full-stack applications using the
                MERN stack, creating scalable and user-centered solutions with
                modern technologies like React, Node.js, and MongoDB. Combines
                strong technical skills with attention to design and user
                experience.
              </p>
              <p>
                Expanding into web security with a security-first mindset —
                building, analyzing, and strengthening applications against
                real-world threats. Focused on vulnerabilities and secure coding
                practices, while approaching development like an attacker to
                ensure every layer is resilient, every input is validated, and
                every system is built to last.
              </p>
              {/* <p>
                Now expanding into web security, applying a security-first
                mindset to development. Continuously learning about
                vulnerabilities, secure coding practices, and how to build
                applications that are not only functional but resilient against
                real-world threats.
              </p> */}
            </div>
            {/* MISSION */}
            <div className="glass rounded-2xl p-6 glow-border animate-pulse animate-fade-in animation-delay-400">
              <p className="text-lg text-foreground italic font-medium font-serif">
                "My mission is to build secure, scalable, and reliable web
                applications where security is not an afterthought, but a core
                foundation. Focused on writing clean, maintainable code while
                proactively identifying and mitigating vulnerabilities to
                deliver systems that users can trust."
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
