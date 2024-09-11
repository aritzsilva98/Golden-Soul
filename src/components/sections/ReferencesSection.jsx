import { references } from '../../data/referencesData'

const ReferencesSection = () => {
  return (
    <section className='references-section'>
      {references && references.length > 0 ? (
        <>
          <h2 className='text-4xl font-bold mb-4'>Referencias</h2>
          <ul className='list-disc pl-6 text-lg'>
            {references.map(ref => (
              <li key={ref.title} className='pb-8'>
                <strong>{ref.title}</strong> por {ref.author}
                <p className='mt-2 text-sm text-gray-700 italic'>
                  "{ref.snippet}"
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className='text-4xl font-bold mb-4'>
          Ooops, no hay material de referencia... Contacta con tu DJ
        </h2>
      )}
    </section>
  )
}

export default ReferencesSection
