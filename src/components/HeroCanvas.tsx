'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    // 3. High-performance Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8)); // Capped for 60fps performance
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Geometry: Apple-inspired Dual Organic Rings with Particles
    const geometry = new THREE.TorusGeometry(1.6, 0.35, 32, 100);
    const wireframeGeo = new THREE.TorusGeometry(1.65, 0.36, 16, 60);

    // Apple Glass Shader Emulation
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x0071e3,
      emissive: 0x0a1a3a,
      roughness: 0.15,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.72,
      wireframe: false,
    });

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x2997ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });

    const mesh = new THREE.Mesh(geometry, material);
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(mesh);
    scene.add(wireframeMesh);

    // Particle Swarm
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x2997ff, 3.5, 20);
    blueLight.position.set(3, 3, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 2.5, 18);
    cyanLight.position.set(-3, -2, 3);
    scene.add(cyanLight);

    // 6. Smooth Mouse Tracking with Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 7. Intersection Observer: Stop render loop when offscreen!
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Organic rotation
      mesh.rotation.x = elapsedTime * 0.2 + targetY * 0.4;
      mesh.rotation.y = elapsedTime * 0.25 + targetX * 0.4;
      wireframeMesh.rotation.x = mesh.rotation.x;
      wireframeMesh.rotation.y = mesh.rotation.y;

      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      geometry.dispose();
      wireframeGeo.dispose();
      material.dispose();
      wireframeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-75 md:opacity-90 overflow-hidden"
      aria-hidden="true"
    />
  );
};

