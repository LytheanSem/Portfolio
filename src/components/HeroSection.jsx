import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="terminal-window p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight">
              <span className="opacity-0 animate-code-fade">Hello, I'm</span>
              <span
                className="text-primary opacity-0 animate-code-fade"
                style={{ animationDelay: "0.2s" }}
              >
                {" "}
                Lythean
              </span>
              <span
                className="text-primary opacity-0 animate-code-fade"
                style={{ animationDelay: "0.4s" }}
              >
                {" "}
                Sem
              </span>
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-code-fade"
            style={{ animationDelay: "0.6s" }}
          >
            A passionate web developer creating modern and user-friendly
            websites
            <br />
            Specializing in building beautiful and functional web applications
          </p>

          <div
            className="pt-4 opacity-0 animate-code-fade"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#projects" className="code-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 font-mono">
          Scroll Down
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
