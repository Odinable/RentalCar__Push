"use client"
import Image from 'next/image'
import Custombutton from './CustomButton'

const hero = () => {
  const handleScroll = () => {

  }
  
    return (
      <div className="hero">
        <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>
            Hi, Its Me, I am the Problem, Its Me
          </h1>
         
          <p className='hero__subtitle'> Lorem ipsum dolor sit amet consectetur adipisicing elit.  asperliquam perferendis. </p>
       
        <Custombutton 
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll} btnType={'button'}        />

        </div>

<div className='hero__image-container'>
              <div className='hero__image'>
                     <Image src="/hero.png" alt='hero' fill className='object-contain'/> 
                      <div className='hero__image-overlay'/>
              </div>
</div>
</div>
    )
}

export default hero
