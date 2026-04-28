import React from 'react'
import PhotoCard from './PhotoCard'

const TopGenaration = async () => {
    const res = await fetch('https://image-generator-xi-blush.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0,8)

  return (
    <div>
        <h1 className='text-2xl font-bold mt-5'>Top Generation with AI</h1>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mt-6'>
            {topPhotos.map(photo=>(
               <PhotoCard key={photo.id} photo={photo}/>
            ))}
        </div>
    </div>
  )
}

export default TopGenaration