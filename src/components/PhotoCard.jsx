import { Button, Card, Chip, Separator } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const PhotoCard = ({photo}) => {
  return (
    <Card className=' border rounded-xl'>
     <div className=' relative w-full aspect-square'>
        <Image src={photo.imageUrl}  
        alt={photo.title} fill  
        className=' object-cover rounded-xl'
        sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
        />
        <Chip size='sm' className=' absolute top-0 right-0 mt-2'>{photo.category}</Chip>
     </div>

     <div>
        <h2>{photo.title}</h2>
     </div>
     <div className='flex items-center  gap-2'>
        <p>❤️</p>
        <p>{photo.likes}</p>
     </div>

     <Separator orientation=' vertical'/>

     <div className='flex items-center  gap-2'>
        <p>⬇️</p>
        <p>{photo.downloads}</p>
     </div>
     <Button className={'text-center items-center mt-2 w-full'}>View Details</Button>
    </Card>
  )
}

export default PhotoCard