import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import spaceTexture from '../../../../public/assets/images/space.jpeg';


function Background({ innerRef }) {
  console.log('innerRef', innerRef)
  const texture = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/uv_grid_opengl.jpg');
/*   const loader = new THREE.TextureLoader();
scene.background = loader.load( 'https://threejs.org/examples/textures/uv_grid_opengl.jpg' ); */
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(20, 20);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const geometry = new THREE.BoxGeometry(5000, 5000, 5000);
  return (
    <mesh ref={innerRef} geometry={geometry} material={material} />
  );
}

export default Background;
