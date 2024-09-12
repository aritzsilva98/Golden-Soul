import LocationItem from '../shared/LocationItem'
import { locations } from '../../data/locationsData'

const LocationsSection = () => {
  return (
    <section className='locations-section pl-4'>
      {locations && locations.length > 0 ? (
        <>
          <h2 className='text-4xl font-bold mb-4'>Localizaciones</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {locations.map(location => (
              <LocationItem key={location.name} location={location} />
            ))}
          </div>
        </>
      ) : (
        <h2 className='text-4xl font-bold mb-4'>
          Ningún lugar reseñable ha sido explorado aún...
        </h2>
      )}
    </section>
  )
}

export default LocationsSection
