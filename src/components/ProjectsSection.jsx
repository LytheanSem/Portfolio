import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cars Analytics",
    description:
      "A react-based project designed to provide detailed insights into various car brands, models, and their associated data.",
    image: "/projects/CarsAnalytics.png",
    githubUrl: "https://github.com/LytheanSem/car-market-analytics",
  },
  {
    id: 2,
    title: "Movie List",
    description:
      "A React-based web application that allows users to browse popular movies, search for specific titles, and mark their favorite movies. This project uses The Movie Database (TMDB) API to fetch movie data dynamically.",
    image: "/projects/MovieList.png",
    githubUrl: "https://github.com/LytheanSem/movie-list",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="terminal-window p-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-mono">
          A collection of my recent work and experiments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="code-block overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-mono text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="code-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/LytheanSem?tab=repositories"
            target="_blank"
          >
            View All Projects <Github />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
