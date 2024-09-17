import { timeline } from '../../data/historyData.js'

const HistorySection = () => {
  return (
    <section className='history-section pl-4'>
      {timeline?.length > 0 ? (
        <div className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
          <h2 className='text-4xl font-bold mb-4'>Historia</h2>
          <ul className='list-disc pl-6 text-lg'>
            {timeline.map(entry => (
              <li key={entry.year}>
                <strong>{entry.year}:</strong> {entry.event}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2 className='text-4xl font-bold mb-4'>No hay registros importantes... Aún...</h2>
      )}
    </section>
  )
}

export default HistorySection
