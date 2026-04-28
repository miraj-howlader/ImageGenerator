import { Chip } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const PhotosDetailPage = async ({ params }) => {
  const { id } = await params

  const res = await fetch(`https://image-generator-xi-blush.vercel.app/data.json`)
  const photos = await res.json()

  const photo = photos.find((photo) => photo.id == id)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <Image
            src={photo.imageUrl}
            width={600}
            height={700}
            alt={photo.title}
            className="w-full h-auto object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          
          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight">
            {photo.title}
          </h1>

          {/* Prompt */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {photo.prompt}
          </p>

          {/* Info Box */}
          <div className="bg-gray-100 rounded-xl p-4 space-y-2 text-sm">
            <p><span className="font-semibold">Category:</span> {photo.category}</p>
            <p><span className="font-semibold">Model:</span> {photo.model}</p>
            <p><span className="font-semibold">Resolution:</span> {photo.resolution}</p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm font-medium">
            <div className="bg-pink-100 px-3 py-1 rounded-full">
              ❤️ {photo.likes}
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-full">
              ⬇️ {photo.downloads}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {photo.tags.map((t) => (
              <Chip
                key={t}
                className="bg-pink-500 text-white font-medium px-3"
              >
                {t}
              </Chip>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default PhotosDetailPage