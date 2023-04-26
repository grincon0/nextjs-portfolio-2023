import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
import viewportDimensions from '@/helpers/getViewportDimensions'

const Palm = ({ isMobile }) => {
  const palm = useGLTF("./assets/palm/scene.gltf");

  return (
    <mesh>
{/*       <hemisphereLight intensity={0.5} skyColor="#ffffff" groundColor="#999999" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.25}
        penumbra={0.1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} /> */}
      <hemisphereLight intensity={0.8} groundColor='black' />
{/*       <spotLight
        position={[150, 200, 20]}
        angle={0.3}
        penumbra={.5}
        intensity={.2}
      /> */}
      {/* <pointLight intensity={.2} /> */}
      <primitive
        object={palm.scene}
        scale={isMobile ? 0.7 : 1.0}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const getViewportSizes = () => {
  return viewportDimensions();
}

const PalmCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    console.log(getViewportSizes())

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [50, 10, 20], fov: 12, near: 1, far: 100 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{height: '100vh', width:'100vw', marginTop: '20vw'}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, -3, -2.2]}
          position={[0, 20, 0]}
          rotation={[(-Math.PI / 2), 0, 0]}
        />
        <Palm isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PalmCanvas;