import { useFrame } from 'react-three-fiber';
import { useMemo, useState } from 'react';
import * as THREE from 'three';

const Stars = (props) => {
  const [stars, setStars] = useState([]);

  useMemo(() => {
    const starCount = 300;
    const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 'white',
      transparent: true,
      opacity: 0.9,
    });

    const newStars = [...Array(starCount)].map(() => {
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      starMesh.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      return starMesh;
    });

    setStars(newStars);
  }, []);

  console.log('stars', stars)

  useFrame(() => {
    stars.forEach((star) => {
      star.position.z += 0.5;
      if (star.position.z > 1000) {
        star.position.z -= 2000;
      }
    });
  });

  return (
    <group {...props}>
      {stars.map((star, index) => (
        <primitive key={index} object={star} />
      ))}
    </group>
  );
}

export default Stars;
