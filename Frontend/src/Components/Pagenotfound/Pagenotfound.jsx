import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Pagenotfound.css";

const Pagenotfound = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 50;
    let y = 50;
    let dx = 2;
    let dy = 2;
    const radius = 10;

    const drawBall = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#2e7d32";
      ctx.fill();
      ctx.closePath();

      if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
      }

      x += dx;
      y += dy;
    };

    const interval = setInterval(drawBall, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pagenotfound-wrapper">
      <div className="pagenotfound-container">
        <h1 className="error-code">404</h1>

        <h2 className="error-title">Page Not Found</h2>

        <p className="error-text">
          Sorry, the page you’re looking for doesn’t exist or is under development.
        </p>

        <div className="mini-game">
          
          <canvas ref={canvasRef} width="300" height="120"></canvas>
        </div>

        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound;