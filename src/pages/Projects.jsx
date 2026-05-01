import { ArrowUpRight } from "lucide-react";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { AnimatedBorderButton } from "../components/AnimateBorderButton.jsx"

const projects = [
  {
    title: "Social Media Platform",
    description:
      "A secure full-stack social media platform inspired by X (Twitter), featuring user authentication, post creation, likes, and comments. Built with Next.js, TypeScript, and MySQL, with emphasis on input validation, secure data handling, and scalable architecture to protect against common web vulnerabilities.",
    image: "/projects/x-clone.png",
    tags: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Prisma",
      "Tailwind CSS",
      "Node.js",
      "Authentication",
      "Secure API",
    ],
    link: "#",
    github: "https://github.com/khairyazedan/SocialMedia_NextApp_MySQL",
  },
  {
    title: "User Management API",
    description:
      "A RESTful Web API built with ASP.NET Core and Entity Framework Core for managing users with full CRUD operations. Designed with clean architecture principles, asynchronous database operations, and scalable backend structure. Demonstrates API development, database integration, and efficient data handling using SQL Server.",
    image: "/projects/DotNetProject.png",
    tags: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "REST API",
      "CRUD",
      "Async/Await",
      "Web API"
    ],
    link: "#",
    github: "https://github.com/khairyazedan/dotnet-sql-api-crud",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-400 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-500">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 200}ms` }}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* OVERLAY LINKS */}

                <div className="absolute flex items-center justify-center gap-4 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                  <a
                    href={project.github}
                    className="p-1 rounded-full glass  hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <SocialIcon
                      style={{ height: 45, width: 45 }}
                      network="github"
                      url={project.github}
                    />
                  </a>
                </div>
              </div>
              {/*CONTENT OF PROJECT  */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* VIEW ALL CALL TO ACTION */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/khairyazedan">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
