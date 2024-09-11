import EasterEggItem from '../shared/EasterEggItem'
import { eggs } from '../../data/eggData.js'

const EasterEggsSection = () => {
  return (
    <section className='characters-section'>
      <>
        <h2 className='text-4xl font-bold mb-4'>ᛋᛖᚲᚱᛖᛏᛟᛋ</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
          {eggs.map(egg => (
            <EasterEggItem key={egg.title} egg={egg} />
          ))}
        </div>
      </>
    </section>
  )
}

export default EasterEggsSection
