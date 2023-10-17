"use client"

import React, { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { Router, useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState('')
  const [model, setmodel] = useState('')
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if(manufacturer === '' && model === ''){
      return alert ('Please Fill in the Search Bar')
    }
  
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  
  }

    const updateSearchParams = (model:string, manufacturer:string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if(model) {
          searchParams.set('model', model)
        } else {
          searchParams.delete('model')
        }

        if(manufacturer) {
          searchParams.set('manufacturer', manufacturer)
        } else {
          searchParams.delete('manufacturer')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname)
      
      }
  return (
    <form className='searchbar' onSubmit={handleSearch} action="">
        <div className='searchbar__item'>

        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />

          <SearchButton  otherClasses = "sm:hidden"/>
        </div>
        <div className="searchbar__item">
            <Image 
            src="/model-icon.png"
            width={25}
            height={25}
            alt="modelicon"
            className="absolute w-[20px] h-[20px] ml-4"
            />
            <input 
            type="text"
            name="model"
            value={model} 
            onChange={(e) => setmodel(e.target.value)}
            placeholder="Model"
            className="searchbar__input"
            />

          <SearchButton otherClasses="sm:hidden"/>

        </div>
        <SearchButton otherClasses="max-sm:hidden"/>


    </form>
  )
}

export default SearchBar
