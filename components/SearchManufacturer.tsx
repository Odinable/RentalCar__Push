C"use client"

import { useState, Fragment } from 'react'
import Image from 'next/image'
import{ Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({manufacturer, setmanufacturer} : SearchManufacturerProps ) => {
const [query, setquery] = useState('')

const filteredManufacturers =
query === ""
  ? manufacturers
  : manufacturers.filter((item) =>
      item
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    );


    return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
                <Combobox.Button className={'absolute top-[14px]'}>
                                    <Image 
                                    src='/car-logo.svg'
                                    alt='carlogo'
                                    height={20}
                                    width={20}
                                    className='ml-4'                                    
                                    />
                </Combobox.Button>

                <Combobox.Input 
                className={'search-manufacturer__input'}
                placeholder='VolksWagen'
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setquery(e.target.value)}
                />

                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setquery('')}
                >

                   <Combobox.Options>
                                {filteredManufacturers.length === 0 && query !== "" && (
                               <Combobox.Option
                                    value={query}
                                className="search-manufacturer__option">
                                 Create "{query}"                                        
                                    </Combobox.Option>
                                     ): (
                                        filteredManufacturers.map((item) => (
                                            <Combobox.Option 
                                            key={item} 
                                            className={({active})} => 
                                             'relative search-manufacturer__option'
                                            ${active ? 'bg-primary-blue text-white" : 'text-gray-900}'}
                                            '}
                                            value={item}
                                            >
                                            {item}
                                            </Combobox.Options>
                                        ))
                                     )}
                   </Combobox.Options>

                </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer