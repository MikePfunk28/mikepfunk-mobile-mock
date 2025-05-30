import { useMemo } from 'react';
import { Vector3 } from 'three';

export function FloatingRing({ radius = 5, items = [] }) {
  const positions = useMemo(() => {
    const angleStep = (2 * Math.PI) / items.length;
    return items.map((item, index) => {
      const angle = index * angleStep;
      return {
        ...item,
        position: new Vector3(
          radius * Math.cos(angle),
          0, // Y level; change for vertical ring
          radius * Math.sin(angle)
        )
      };
    });
  }, [items, radius]);

  return (
    <>
      {positions.map(({ position, label, component }, idx) => (
        <group position={position.toArray()} key={idx}>
          {component || <DefaultFloatingIcon label={label} />}
        </group>
      ))}
    </>
  );
}

function DefaultFloatingIcon({ label = '' }) {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 0.2]} />
        <meshStandardMaterial color="#2e90fa" />
      </mesh>
      <Text position={[0, -1.2, 0]} fontSize={0.4} color="white">
        {label}
      </Text>
    </>
  );
}
