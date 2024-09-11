import { formatTextWithLineBreaks } from '../../utils/textUtils'

const LocationItem = ({ location }) => {
  return (
    <div className="location-item bg-amber-200 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{location.name}</h3>
      <p>{formatTextWithLineBreaks(location.description)}</p>
      <p className="mt-4 text-sm text-gray-700">
        <strong>Datos:</strong> {formatTextWithLineBreaks(location.history)}
      </p>
      <p className="mt-2 text-sm text-gray-700">
        <strong>Personajes importantes:</strong> {formatTextWithLineBreaks(location.importantFigures)}
      </p>
    </div>
  );
}

export default LocationItem;
