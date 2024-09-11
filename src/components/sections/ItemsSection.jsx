import LegendaryItem from '../shared/LegendaryItem'
import { items } from '../../data/itemsData.js'

const ItemsSection = () => {
  return (
    <section className='items-section'>
      {items && items.length > 0 ? (
        <>
          <h2 className='text-4xl font-bold mb-4'>Objetos importantes</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {items.map(item => (
              <LegendaryItem key={item.name} item={item} />
            ))}
          </div>
        </>
      ) : (
        <h2 className='text-4xl font-bold mb-4'>
          No se han encontrado objetos importantes por el momento...
        </h2>
      )}
    </section>
  )
}

export default ItemsSection
