import Category from '@/components/Category'
import PhotoCard from '@/components/PhotoCard'
import React from 'react'

const AllPhotosPage =async ({searchParams}) => {
  const {category}= await searchParams
  console.log(category)
    const res = await fetch('https://image-generator-xi-blush.vercel.app/data.json')
    const allphotos = await res.json()

    const filteredPhotos = category ? allphotos.filter(photo=>photo.category.toLowerCase() == category.toLowerCase()): allphotos
   
  return (
    <div>
        <h1 className='text-2xl font-bold m-4'>All Photos</h1>
        <Category/>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
            {filteredPhotos.map(photo=><PhotoCard photo={photo} key={photo.id}/>)}
        </div>
    </div>
  )
}

export default AllPhotosPage