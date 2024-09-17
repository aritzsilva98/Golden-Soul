import { useState, useEffect } from 'react';
import { runes } from '../../data/data';

const useParticles = () => {
  const [particles, setParticles] = useState([]);
  const [floatingRunes, setFloatingRunes] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: `particle-${i}-${Date.now()}`, // Clave única con timestamp
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1
      }));
      setParticles(newParticles);
    };

    const createFloatingRunes = () => {
      const newRunes = Array.from({ length: 20 }, (_, i) => ({
        id: `rune-${i}-${Date.now()}`, // Clave única con timestamp
        rune: runes[Math.floor(Math.random() * runes.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 24 + 16,
        rotation: Math.random() * 360
      }));
      setFloatingRunes(newRunes);
    };

    createParticles();
    createFloatingRunes();

    const handleResize = () => {
      createParticles();
      createFloatingRunes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { particles, floatingRunes };
};

export default useParticles;
