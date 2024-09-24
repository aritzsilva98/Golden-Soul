import { formatTextWithLineBreaks } from '../../utils/textUtils'

const CharacterItem = ({ character }) => {
  const hasTitle = Boolean(character.title);

  return (
    <div className="character-item bg-amber-200 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 sm:text-2xl md:text-3xl">
        {character.name} - {character.role}
      </h3>
      <p className="pb-3 text-sm sm:text-lg md:text-xl">{character.description}</p>
      {hasTitle && (
        <p className="text-sm text-gray-700 sm:text-lg md:text-xl">
          <strong>Título/s: </strong>
          {formatTextWithLineBreaks(character.title)}
        </p>
      )}
    </div>
  );
}

export default CharacterItem;
