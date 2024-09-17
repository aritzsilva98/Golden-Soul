function MapSection () {
  const mapImage = '/images/provisionalMap.png'

  return (
    <section className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
      <div className='text-2xl font-bold mb-4 text-amber-800 flex flex-row'>
        <p className=' border-2 px-1 rounded-lg border-orange-400'>
          Ducado de Al'Thirel
        </p>
      </div>
      <div className='space-y-4'>
        {mapImage && (
          <div className='relative'>
            <img
              src={mapImage}
              alt='Mapa actual de la campaña'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default MapSection
