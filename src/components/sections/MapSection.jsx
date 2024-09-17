function MapSection () {
  const mapImage = '/images/provisionalMap.png'

  return (
    <section className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
      <h2 className='text-2xl font-bold mb-4 text-amber-800'>Mapa</h2>
      <div className='space-y-4'>
        {mapImage ? (
          <div className='relative'>
            <img
              src={mapImage}
              alt='Mapa actual de la campaña'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
        ) : (
          <>
            <p> Parece que ha habido un error, aquí debería haber un mapa...</p>
          </>
        )}
      </div>
    </section>
  )
}

export default MapSection
