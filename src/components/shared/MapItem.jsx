import { useState } from 'react';
import Loading from '../../utils/Loader';

const MapItem = ({ imageSrc, altText }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className='relative'>
      {loading && <Loading />}
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
