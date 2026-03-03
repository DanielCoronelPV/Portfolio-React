import { useEffect, useState, useMemo, useRef } from "react";

type CubeType = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
};

export const AnimatedCubeBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cubes: CubeType[] = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 50 + Math.random() * 50,
      speed: 0.2 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {cubes.map((cube) => (
        <InteractiveCube key={cube.id} cube={cube} mouse={mouse} />
      ))}
    </div>
  );
};

const InteractiveCube = ({
  cube,
  mouse,
}: {
  cube: CubeType;
  mouse: { x: number; y: number };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotation = useRef({ x: 0, y: 0, z: 0 });
  const hoverInfluence = useRef({ x: 0, y: 0 });
  const mouseRef = useRef(mouse);

  // Mantener mouse actualizado sin reiniciar animación
  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      // Rotación automática constante
      rotation.current.x += cube.speed;
      rotation.current.y += cube.speed * 1.2;
      rotation.current.z += cube.speed * 0.6;

      const rect = ref.current?.getBoundingClientRect();

      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseRef.current.x - centerX;
        const dy = mouseRef.current.y - centerY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 350;

        if (distance < maxDistance) {
          const influence = 1 - distance / maxDistance;

          hoverInfluence.current.x +=
            ((dy / 5) * influence - hoverInfluence.current.x) * 0.2;

          hoverInfluence.current.y +=
            ((-dx / 5) * influence - hoverInfluence.current.y) * 0.2;
        } else {
          hoverInfluence.current.x *= 0.92;
          hoverInfluence.current.y *= 0.92;
        }
      }

      if (ref.current) {
        ref.current.style.transform = `
          rotateX(${rotation.current.x + hoverInfluence.current.x}deg)
          rotateY(${rotation.current.y + hoverInfluence.current.y}deg)
          rotateZ(${rotation.current.z}deg)
        `;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [cube.speed]);

  return (
    <div
      style={{
        position: "absolute",
        left: cube.x,
        top: cube.y,
        width: cube.size,
        height: cube.size,
        perspective: "1000px",
      }}
    >
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const transforms = [
            `translateZ(${cube.size / 2}px)`,
            `translateZ(-${cube.size / 2}px) rotateY(180deg)`,
            `rotateY(90deg) translateZ(${cube.size / 2}px)`,
            `rotateY(-90deg) translateZ(${cube.size / 2}px)`,
            `rotateX(90deg) translateZ(${cube.size / 2}px)`,
            `rotateX(-90deg) translateZ(${cube.size / 2}px)`,
          ];

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: "1px solid rgba(99,102,241,0.3)",
                background:
                  "linear-gradient(to bottom right, rgba(99,102,241,0.1), rgba(99,102,241,0.05))",
                transform: transforms[i],
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
