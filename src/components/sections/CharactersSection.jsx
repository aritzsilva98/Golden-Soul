import CharacterItem from '../shared/CharacterItem'
import { characters, myCharacters } from '../../data/charactersData'
import RunesDivisor from '../shared/decorations/runesDivisor'

const CharactersSection = () => {
  const hasMyCharacters = myCharacters && myCharacters.length > 0;
  const hasCharacters = characters && characters.length > 0;

  return (
    <section className='characters-section pl-4'>
      {hasMyCharacters && (
        <div className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
          <h2 className='text-xl font-bold mb-4 text-center sm:text-2xl sm:text-center md:text-3xl md:text-left lg:text-4xl'>Personajes Jugadores</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
            {myCharacters.map((character, index) => (
              <CharacterItem key={character.id || `${character.name}-${index}`} character={character} />
            ))}
          </div>
        </div>
      )}

      {hasMyCharacters && hasCharacters && <RunesDivisor />}

      {hasCharacters && (
        <div className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
          <h2 className='text-xl font-bold mb-4 text-center sm:text-2xl sm:text-center md:text-3xl md:text-left lg:text-4xl'>Personajes No Jugadores</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
            {characters.map((character, index) => (
              <CharacterItem key={character.id || `${character.name}-${index}`} character={character} />
            ))}
          </div>
        </div>
      )}

      {!hasMyCharacters && !hasCharacters && (
        <h2 className='text-4xl font-bold mb-4'>No hay datos... Por ahora</h2>
      )}
    </section>
  )
}

export default CharactersSection;
