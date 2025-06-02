import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },

  // Tools
  { name: "Git/Github", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Cursor", category: "tools" },
  { name: "Canva", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="terminal-window p-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-md font-mono transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10"
              )}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="skill-card group relative p-6 rounded-xl border border-card/40 bg-card/60 backdrop-blur-md shadow-md transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_2px_rgba(34,197,94,0.3)] hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-5 w-5 text-primary/80 opacity-80 group-hover:text-primary transition-colors duration-300" />
                <h3 className="font-mono text-primary text-lg tracking-wide">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
