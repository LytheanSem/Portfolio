import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration

function MatrixBackground() {
  const [matrixDrops, setMatrixDrops] = useState([]);

  // Characters to use in the matrix effect
  const matrixChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

  useEffect(() => {
    generateMatrixDrops();
    function handleResize() {
      generateMatrixDrops();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function generateMatrixDrops() {
    const columns = Math.floor(window.innerWidth / 30);
    const newDrops = [];

    for (let i = 0; i < columns; i++) {
      const length = Math.floor(Math.random() * 10) + 5; // Shorter drops
      const characters = Array.from(
        { length },
        () => matrixChars[Math.floor(Math.random() * matrixChars.length)]
      );

      newDrops.push({
        id: i,
        x: i * 30,
        y: Math.random() * -100,
        speed: Math.random() * 1 + 2, // Slower speeds
        characters,
        headIndex: 0,
        lastUpdate: Date.now(),
      });
    }

    setMatrixDrops(newDrops);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setMatrixDrops((prevDrops) =>
        prevDrops.map((drop) => {
          if (now - drop.lastUpdate < 300) return drop; // Slower character changes

          return {
            ...drop,
            headIndex: (drop.headIndex + 1) % drop.characters.length,
            characters: drop.characters.map((char, index) =>
              index === drop.headIndex
                ? matrixChars[Math.floor(Math.random() * matrixChars.length)]
                : char
            ),
            lastUpdate: now,
          };
        })
      );
    }, 100); // Slower update interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background/50">
      {matrixDrops.map((drop) => (
        <div
          key={drop.id}
          className="matrix-drop"
          style={{
            left: drop.x + "px",
            top: drop.y + "%",
            animationDuration: drop.speed + "s",
          }}
        >
          {drop.characters.map((char, index) => (
            <span
              key={index}
              className={`matrix-char ${
                index === drop.headIndex ? "matrix-head" : ""
              }`}
              style={{
                opacity: index === drop.headIndex ? 0.8 : 0.4,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MatrixBackground;
