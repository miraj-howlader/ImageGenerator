import PhotoCard from '@/components/PhotoCard'
import React from 'react'

const AllPhotosPage =async () => {
    const res = await fetch('https://image-generator-xi-blush.vercel.app/data.json')
    const allphotos = await res.json()
    console.log(allphotos)
  return (
    <div>
        <h1 className='text-2xl font-bold m-4'>All Photos</h1>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
            {allphotos.map(photo=><PhotoCard photo={photo} key={photo.id}/>)}
        </div>
    </div>
  )
}

export default AllPhotosPage