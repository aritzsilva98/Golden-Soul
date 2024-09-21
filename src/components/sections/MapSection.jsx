import React from 'react'
import MapItem from '../shared/MapItem'
import { maps } from '../../data/mapsData'

const MapSection = () => {
  return (
    <section className='bg-amber-50 border-2 border-amber-700 rounded-lg p-6 shadow-lg mb-8'>
      <div className='text-2xl font-bold mb-4 text-amber-800 flex flex-row'>
        <p className='border-2 px-1 rounded-lg border-orange-400'>
          Mapas relevantes de la campaña
        </p>
      </div>
      <div className='space-y-4'>
        {maps.map((map, index) => (
          <MapItem key={index} imageSrc={map.src} altText={map.alt} title={map.title}/>
        ))}
      </div>
    </section>
  )
}

export default MapSection
