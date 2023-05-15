import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default function Section1() {
  const containerRef = useRef(null);
  useEffect(() => {
    let scene, renderer, camera;

    // Initialize the scene
    scene = new THREE.Scene();

    // Initialize the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Initialize the camera
    camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    // Load the glTF model
    const loader = new GLTFLoader();
    loader.load('/Assets/scene.glb', (gltf) => {
      console.log(gltf); 
      scene.add(gltf.scene);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model
      if (scene && scene.children.length > 0) {
        scene.children[0].rotation.y += 0.01;
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      // Dispose of the WebGL context
      renderer.dispose();
    };
  }, []);

  return (
    <section id="Section1" className="bg-gray-100 min-h-screen py-10">
      <div ref={containerRef}></div>
    </section>
  );

}
