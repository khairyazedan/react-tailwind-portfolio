import React from "react";
const experiences = [
  {
    period: "Jan 2026 — Present",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for startups and small businesses, building full-stack applications from concept to deployment. Focused on performance, scalability, and secure coding practices.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "MySQL",
      "MongoDB",
    ],
    current: true,
  },
  {
    period: "Oct 2025 — Jan 2026",
    role: "Open-Source Applications Developer Trainee",
    company: "National Telecommunication Institute (NTI)",
    description:
      "Completed an intensive full-stack development program covering modern frontend frameworks like React, Next.js, and Vue.js, along with backend development using Node.js, Express, and SQL/NoSQL databases. Built hands-on projects focused on scalable and secure web applications.",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Express",
      "SQL",
      "MongoDB",
    ],
    current: false,
  },
  {
    period: "Oct 2021 — Sep 2023",
    role: "Diploma in Fashion Design",
    company: "October University for Modern Sciences & Arts (MSA)",
    description:
      "Developed strong creative and visual design skills, enhancing attention to detail, user experience thinking, and presentation abilities — now applied to frontend development and UI design.",
    technologies: ["Design Thinking", "Creativity", "Visual Design"],
    current: false,
  },
  {
    period: "Oct 2018 — May 2021",
    role: "Bachelor’s Degree in Accounting",
    company: "Cairo University",
    description:
      "Built a strong foundation in analytical thinking, data-driven decision making, and problem-solving — skills now applied to backend logic, system design, and full-stack development.",
    technologies: ["Problem Solving", "Data Analysis", "Critical Thinking"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-lg
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 200}ms` }}
              >
                {/* TIMELINE DOTS */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* CONTENT */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
