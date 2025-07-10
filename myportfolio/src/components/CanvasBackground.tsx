import { useEffect, useRef } from "react";

function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const w = canvas.width;
    const h = canvas.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx as CanvasRenderingContext2D;

    class Triangle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      ctx: CanvasRenderingContext2D;

      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        ctx: CanvasRenderingContext2D
      ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = 30; // approximate triangle size
        this.ctx = ctx;
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + 5, this.y - 10);
        this.ctx.lineTo(this.x + 10, this.y);
        this.ctx.closePath();
        this.ctx.fillStyle = "rgba(94, 230, 189, 0.397)";
        this.ctx.fill();
        this.ctx.strokeStyle = "oklch(10.503% 0.04535 275.281)";
        this.ctx.stroke();
      }

      update(triangles: Triangle[]) {
        if (this.x + this.radius > w || this.x - this.radius < 0) this.dx *= -1;
        if (this.y + this.radius > h || this.y - this.radius < 0) this.dy *= -1;

        this.x += this.dx;
        this.y += this.dy;

        this.checkCollisions(triangles);
        this.draw();
      }

      checkCollisions(triangles: Triangle[]) {
        for (const other of triangles) {
          if (this === other) continue;

          const dx = this.x - other.x;
          const dy = this.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.radius + other.radius) {
            // simple elastic collision: swap velocities
            const tempDx = this.dx;
            const tempDy = this.dy;
            this.dx = other.dx;
            this.dy = other.dy;
            other.dx = tempDx;
            other.dy = tempDy;

            // adjust position slightly to avoid sticking
            const overlap = this.radius + other.radius - distance;
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * (overlap / 2);
            const moveY = Math.sin(angle) * (overlap / 2);

            this.x += moveX;
            this.y += moveY;
            other.x -= moveX;
            other.y -= moveY;
          }
        }
      }
    }

    let triangleArray: Triangle[] = [];

    for (let i = 0; i < 20; i++) {
      let x = Math.random() * w;
      let y = Math.random() * h;
      let dx = (Math.random() - 0.5) * 2;
      let dy = (Math.random() - 0.5) * 2;

      let triangles = new Triangle(x, y, dx, dy, ctx);
      triangleArray.push(triangles);
    }

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      context.clearRect(0, 0, w, h);
      triangleArray.forEach((triangle) => triangle.update(triangleArray));
    }

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    ></canvas>
  );
}

export default CanvasBackground;
