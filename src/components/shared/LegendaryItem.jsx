import { formatTextWithLineBreaks } from '../../utils/textUtils'

const LegendaryItem = ({ item }) => {
  return (
    <div className="legendary-item bg-amber-200 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
      <p>{item.description}</p>
      <p className="mt-4 text-sm text-gray-700"><strong>Origen:</strong> {item.origin}</p>
      <p className="mt-2 text-sm text-gray-700"><strong>Poderes:</strong> {formatTextWithLineBreaks(item.powers)}</p>
    </div>
  );
}

  
  export default LegendaryItem;
  