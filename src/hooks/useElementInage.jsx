import { useState, useEffect } from 'react';

export default function useElementImage(name) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const importImage = async () => {
      try {
        const image = await import(`../assets/img/elements/el_${name}.webp`);
        setImageSrc(image.default);
      } catch (error) {
        console.error('Error loading image: ', error);
      }
    };
    if (name) importImage();
  }, [name]);

  return <img draggable={false} src={imageSrc} alt={name} className='w-2/5 self-center' />;
}