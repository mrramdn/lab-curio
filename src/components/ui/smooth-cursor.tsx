"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { FC, JSX, useEffect, useRef, useState } from "react";

interface Position { x: number; y: number; }

export interface SmoothCursorProps {
  cursor?: JSX.Element;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.5 }}
    >
      <g filter="url(#filter0_d_91_7928)">
        <path d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z" fill="black"/>
        <path d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z" stroke="white" strokeWidth={2.25825}/>
      </g>
      <defs>
        <filter id="filter0_d_91_7928" x={0.602397} y={0.952444} width={49.0584} height={52.428}
          filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_91_7928" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_91_7928" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  // target posisi (motionValue) → di-spring agar smooth
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const cursorX = useSpring(targetX, springConfig);
  const cursorY = useSpring(targetY, springConfig);

  const rotation = useSpring(0, { ...springConfig, damping: 60, stiffness: 300 });
  const scale = useSpring(1, { ...springConfig, stiffness: 500, damping: 35 });

  const prev = useRef<Position>({ x: 0, y: 0 });
  const prevAngle = useRef(0);
  const accumulated = useRef(0);
  const lastMoveAt = useRef(0);
  const idleTimer = useRef<number | null>(null);

  // unwrap sudut biar nggak “snap” di 180/-180
  const accumulateAngle = (curr: number) => {
    let diff = curr - prevAngle.current;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    accumulated.current += diff;
    prevAngle.current = curr;
    return accumulated.current;
  };

  useEffect(() => {
    const body = document.body;
    const oldCursor = body.style.cursor;
    body.classList.add("hide-native-cursor"); // matikan native cursor global
    body.style.cursor = "none";

    const onPointerMove = (e: PointerEvent) => {
      targetX.set(e.clientX);
      targetY.set(e.clientY);
      lastMoveAt.current = performance.now();

      // scale saat bergerak
      if (scale.get() !== 0.96) scale.set(0.96);

      // reset idle timer
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        scale.set(1);
      }, 140); // short debounce → responsif tapi gak “pumping”
    };

    // 1 listener ringan (passive), pointermove lebih baik dari mousemove
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // RAF loop: hitung rotasi dari delta posisi (frame-rate aligned)
    let rafId = 0;
    const loop = () => {
      const x = targetX.get();
      const y = targetY.get();

      const dx = x - prev.current.x;
      const dy = y - prev.current.y;
      const speedSq = dx * dx + dy * dy;

      if (speedSq > 0.0001) {
        const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        const unwrapped = accumulateAngle(angleDeg);
        rotation.set(unwrapped);
      }

      prev.current = { x, y };
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      window.removeEventListener("pointermove", onPointerMove);
      body.classList.remove("hide-native-cursor");
      body.style.cursor = oldCursor || "auto";
    };
  }, [targetX, targetY, rotation, scale]);

  return (
    <motion.div
      style={{
        position: "fixed",
        // gunakan transform x/y (bukan left/top) → lebih hemat reflow
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale: scale,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {cursor}
    </motion.div>
  );
}
