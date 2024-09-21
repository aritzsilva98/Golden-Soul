import { useState } from 'react';
import Loading from '../../utils/Loader';

const MapItem = ({ imageSrc, altText, title }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className='relative'>
      {loading && <Loading />}
      <p className='text-center pt-10 pb-4 text-3xl font-bold text-orange-400'>{title}</p>
      <img
        src={imageSrc}
        alt={altText}
        className='w-full h-auto rounded-lg shadow-lg'
        onLoad={handleImageLoad}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default MapItem;
