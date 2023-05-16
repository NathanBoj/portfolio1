import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import ModelComponent from './ModelComponent';

function Section1() {
  return (
    <section id="Section1" className="h-screen bg-black py-12">
      <div className="relative container mx-auto py-12">
        <h1 className="absolute top-100 left-400 text-6xl font-bold text-white">
          Hello, I'm<br />
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-white to-orange-500 text-8xl">Nathan</span>
        </h1>
      </div>
      <div className="flex items-start justify-center h-full py-12">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ width: '100%', height: '100%' }}>
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <ModelComponent scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </section>
  );
}

export default Section1;
