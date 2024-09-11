import { formatTextWithLineBreaks } from '../../utils/textUtils'

const CharacterItem = ({ character }) => {

  const haveTitle = character.title ? 'Título/s: ' : ''
  return (
    <div className="character-item bg-amber-200 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{character.name} - {character.role}</h3>
      <p>{character.description}</p>
      <p className="text-sm text-gray-700"><strong>{haveTitle}</strong> {formatTextWithLineBreaks(character.title)}</p>
    </div>
  );
}
  
  export default CharacterItem;
  