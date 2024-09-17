import { formatTextWithLineBreaks } from '../../utils/textUtils'

const CharacterItem = ({ character }) => {
  const hasTitle = Boolean(character.title); // Evaluar si el personaje tiene título

  return (
    <div className="character-item bg-amber-200 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">
        {character.name} - {character.role}
      </h3>
      <p className="pb-3">{character.description}</p>
      {hasTitle && (
        <p className="text-sm text-gray-700">
          <strong>Título/s: </strong>
          {formatTextWithLineBreaks(character.title)}
        </p>
      )}
    </div>
  );
}

export default CharacterItem;
