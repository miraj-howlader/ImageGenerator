import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const Category = async () => {
    const res = await fetch('https://image-generator-xi-blush.vercel.app/category.json')
    const category = await res.json()
    
  return (
    <div className=' space-x-3 mb-4'>
        {category.map(c=> <Link key={c.id} href={`?category=${c.name.toLowerCase()}`}>
        <Button >{c.name}</Button>
        </Link>)}
    </div>
  )
}

export default Category