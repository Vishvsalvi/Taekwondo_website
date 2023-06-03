import React from 'react'

const AboutCard = ({name, image, content, postition, post}) => {
  return (
    <div>
        <div className={`${postition} max-w-5xl px-4 py-8`}>
    <section className="rounded-lg bg-gray-100 p-8">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <img
          alt={name}
          src={image}
          className="aspect-square w-full rounded-lg object-cover"
        />
  
        <blockquote className="sm:col-span-2">
          <p className="text-xl font-medium sm:text-2xl">
           {content}
          </p>
  
          <cite className="mt-8 inline-flex items-center not-italic">
            <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
            <p className="text-sm uppercase text-gray-500 sm:ms-3">
              <strong>{name}</strong>, {post}
            </p>
          </cite>
        </blockquote>
      </div>
    </section>
  </div></div>
  )
}

export default AboutCard