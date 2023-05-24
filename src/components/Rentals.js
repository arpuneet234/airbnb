import React from 'react'
import house from '../assets/house.jpg'
import house2 from '../assets/House2.webp'
import house3 from '../assets/house3.webp'
import house4 from '../assets/house4.webp'
import house5 from '../assets/house5.webp'
import house6 from '../assets/house6.webp'

import Rental from './Rental'

const Rentals = () => {
    const rentals=[
        {title:'Texas,USA', image:house, price:'1500'},
        {title:'London,UK', image:house2, price:'1500'},
        {title:'Torino,Italy', image:house3, price:'1500'},
        {title:'Paris,France', image:house4, price:'1500'},
        {title:'Texas,USA', image:house5, price:'1500'},
        {title:'Rome,Italy', image:house6, price:'1500'},
        {title:'Texas,USA', image:house2, price:'1500'},
        {title:'Torino,Italy', image:house, price:'1500'},
        {title:'London,UK', image:house4, price:'1500'},
        {title:'Texas,USA', image:house3, price:'1500'}
    ]
  return (
    <div className='py-3 sm:py-5'>
     
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
        {rentals.map((rental)=><Rental title={rental.title} image={rental.image} price={rental.price}/>)}
      </div>
    </div>
    
  )
}

export default Rentals
