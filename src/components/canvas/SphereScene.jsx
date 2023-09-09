import { Canvas, useFrame  } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';
import Background from './helpers/Background.jsx';

const SphereScene = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 800]);
  const spheresRef = useRef([]);
  const backgroundRef = useRef();

  console.log(cameraPosition instanceof THREE.Vector3);

  const handleScroll = (event) => {
    const delta = event.deltaY * 2;
    console.log('scrolling', delta);
    setCameraPosition((prevPosition) => [
      prevPosition[0],
      prevPosition[1],
      prevPosition[2] - delta * 0.1
    ]);
  };

  function getColor(index) {
    const colors = [0xff0000, 0x800080, 0xffa500, 0x008000, 0x0000ff, 0xffff00];
    return colors[index];
  }

  const handleIncrement = () => {
    setCameraPosition((prevPosition) => {
      console.log('prev position', prevPosition);
      const newPosition = [...prevPosition];
      newPosition[2] = newPosition[2] + 400;
      console.log('new position', newPosition);
      return newPosition;
    });
  };

  const handleDecrement = () => {
    setCameraPosition((prevPosition) => {
      const newPosition = new THREE.Vector3();
      newPosition.copy(prevPosition);
      newPosition.add(new THREE.Vector3(0, 0, 50).negate());
      return newPosition;
    });
  };

  const CameraController = ({ spheresRef }) => {
    const cameraRef = useRef();
    const targetRef = useRef(new THREE.Vector3());

    useFrame(() => {
      const firstSphere = spheresRef.current[0];
      if (firstSphere) {
        const targetPosition = firstSphere.position.clone().sub(new THREE.Vector3(0, 0, 100));
        targetRef.current.lerp(targetPosition, 0.1);
        cameraRef.current.lookAt(targetRef.current);
      }
    });

    return (
      <>
        <perspectiveCamera ref={cameraRef} />
      </>
    );
  }

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
  };

  const BackgroundController = () => {
    useFrame(() => {
      if(backgroundRef.current) {
        backgroundRef.current.rotation.z += 0.001;
      }
    });

    return null;
  };

  return (
    <>
    <Canvas
      camera={{
        position: cameraPosition,
        fov: 100,
        near: 0.1,
        far: 10000
      }}
      style={{ height: '100vh', width: '100vw', marginTop: '20vw' }}
      onWheel={handleScroll}
    >
      {console.log('cam',cameraPosition)}
      <Suspense fallback={null}>
        <Background innerRef={backgroundRef} />
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        {[...Array(6)].map((_, index) => (
          <Sphere
            key={index}
            ref={(sphere) => spheresRef.current.push(sphere)}
            position={[0, 0, (index - 2.5) * 200]}
            args={[50, 32, 32]}
          >
            <meshPhongMaterial
              color={getColor(index)}
              emissive={getColor(index)}
              emissiveIntensity={0.1}
            />
          </Sphere>
        ))}
        <BackgroundController/>

      </Suspense>
      <CameraController spheresRef={spheresRef} />
    </Canvas>
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <button onClick={handleIncrement}>Move Camera Forward</button>
          <button onClick={handleDecrement}>Move Camera Backward</button>
        </div>
    </>
  );
};

export default SphereScene;