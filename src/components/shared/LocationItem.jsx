import { formatTextWithLineBreaks } from '../../utils/textUtils'

const LocationItem = ({ location }) => {
  return (
    <div className='location-item bg-amber-200 p-6 rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold mb-2 sm:text-2xl md:text-3xl'>{location.name}</h3>
      
      {location.description && (
        <p className="pb-3 text-sm sm:text-lg md:text-xl">{formatTextWithLineBreaks(location.description)}</p>
      )}

      {location.history && (
        <p className='mt-2 text-smsm:text-lg md:text-xl text-gray-700'>
          <strong>Datos:</strong> {formatTextWithLineBreaks(location.history)}
        </p>
      )}

      {location.importantFigures && (
        <p className='mt-2 text-sm text-gray-700 sm:text-lg md:text-xl'>
          <strong>Personajes importantes:</strong>{' '}
          {formatTextWithLineBreaks(location.importantFigures)}
        </p>
      )}
    </div>
  )
}

export default LocationItem
