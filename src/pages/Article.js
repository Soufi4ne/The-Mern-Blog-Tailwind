import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'

const Article = () => {
  const {name} = useParams();
  const article = articleContent.find(function take (article){ return article.name === name})
  return (
    <div>       
       <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>Free Article about {name}</h1>
    </div>
  )
}

export default Article