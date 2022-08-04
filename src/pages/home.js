import React from 'react'

const Home = () => {
  return (
    <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>Hi, Welcome to the MERN Blog</h1>
        <p className="mx-auto leading-relaxed text-base mb-4">
        Thank you for reading MERN Blog, a news and opinion site about tech and things serious developers care about. We're here to inform you and, sometimes, entertain you. We also often write about pop culture topics like anime, TV, and video games: if it's gud, interesting, or inspires us, we want to tell you about it.
        </p>
        <p className="mx-auto leading-relaxed text-base mb-4">
        We aim to be an inclusive site for developers of any ethnicity, gender or sexual orientation. We expect our writers and commenters to treat those they write about as they would if they met them in person. For more on what that means, on the values we embrace and on what lines we expect writers and commenters not to cross, please read this. You might also be interested in G/O Media's Editorial Code, which you can read here.
        </p>
        <p className="mx-auto leading-relaxed font-bold text-base mb-4">
        We crave news. We want scoops! So, please, tip your editors by emailing: tips@mernblog.com<br/>
        <span className="font-light">(This whole text is from Kotaku/about page)</span>
        </p>
    </div>
  )
}

export default Home