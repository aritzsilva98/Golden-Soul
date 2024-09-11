import { SyncLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <>
      <div className='flex align-middle justify-center h-full w-full pt-5'>
        <SyncLoader speedMultiplier={1}/>
      </div>
    </>
  )
}
