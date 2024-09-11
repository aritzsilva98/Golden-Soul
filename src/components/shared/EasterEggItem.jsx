const EasterEggItem = ({ egg }) => {
  return (
    <div className='egg-item bg-amber-200 p-6 rounded-lg shadow-md'>
      <h3 className='text-2xl font-semibold mb-2'>{egg.title}</h3>
      <p>{egg.hint}</p>
    </div>
  )
}

export default EasterEggItem
