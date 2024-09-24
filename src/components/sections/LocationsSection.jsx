import LocationItem from '../shared/LocationItem'
import { locations } from '../../data/locationsData'

const LocationsSection = () => {
  return (
    <section className='locations-section pl-4'>
      {locations?.length > 0 ? (
        <div className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
          <h2 className='text-xl font-bold mb-4 text-center sm:text-2xl md:text-3xl lg:text-4xl'>Localizaciones</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {locations.map(location => (
              <LocationItem key={location.name} location={location} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className='text-4xl font-bold mb-4'>
          Ningún lugar reseñable ha sido explorado aún...
        </h2>
      )}
    </section>
  )
}

export default LocationsSection
