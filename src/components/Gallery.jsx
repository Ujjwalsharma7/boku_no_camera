import React from 'react'

import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'


const Gallery = () => {

    let data = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
        {
            id: 5,
            img: img5,
        },
        {
            id: 6,
            img: img6,
        },

    ]
    return (
        <div className=' columns-3 px-12 '>
            {data.map((item, index) => {
                return (
                    <div className=' mb-2' key={index}>
                        <img src={item.img} className=' w-full ' />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
