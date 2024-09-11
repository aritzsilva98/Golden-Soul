import CharacterItem from '../shared/CharacterItem'
import { characters, myCharacters } from '../../data/charactersData'
import RunesDivisor from '../shared/decorations/runesDivisor/runesDivisor'

const CharactersSection = () => {
  return (
    <section className='characters-section'>
      {myCharacters && myCharacters.length > 0 && (
        <>
          <h2 className='text-4xl font-bold mb-4'>Personajes Jugadores</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
            {myCharacters.map(character => (
              <CharacterItem key={character.name} character={character} />
            ))}
          </div>
        </>
      )}

      {myCharacters &&
        myCharacters.length > 0 &&
        characters &&
        characters.length > 0 && <RunesDivisor />}

      {characters && characters.length > 0 && (
        <>
          <h2 className='text-4xl font-bold mb-4'>Personajes No Jugadores</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
            {characters.map(character => (
              <CharacterItem key={character.name} character={character} />
            ))}
          </div>
        </>
      )}

      {(!myCharacters || myCharacters.length === 0) &&
      (!characters || characters.length === 0) ? (
        <h2 className='text-4xl font-bold mb-4'>No hay datos... Por ahora</h2>
      ) : (
        <></>
      )}
    </section>
  )
}

export default CharactersSection
