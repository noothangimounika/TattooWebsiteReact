import React from 'react'

import Slider from "react-slick";
import './Testimonials.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    
  return (
    <div className='w-3/4 m-auto bg-light '>
        <h1>Testimonials</h1>
        <div className="mt-20"  >
        <Slider {...settings}>
    {data.map((item, index) => (
        <div key={index} className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-primary  d-flex justify-content-center">
                <img src={item.img} alt={item.name} style={{width:'100px',height:'100px',borderRadius:'50%'}} />
            </div>
            <div className="flex flex-col items-center bg-success gap-4 p-4">
                <p className="text-xl font-semibold">{item.name}</p>
                <p>{item.review}</p>
                <button className="btn btn-primary text-white text-lg px-6 py-1 rounded-xl">Read More</button>
            </div>
        </div>
    ))}
    </Slider>
        </div>
        
    </div>
  )
}

const data=[
    {
        name:'Kevin Toler',
        img:'https://img.freepik.com/premium-photo/waiting-session-muscled-good-looking-man-crossing-his-hands-covered-tattoos-while-wearing-blue-t-shirt_259150-37739.jpg?w=360',
        review:'The guy who did my tattoo (Hunter) was fantastic! The tattoo ended up being really high quality In terms of line work in particular. Made sure to properly clean all the machines, wear gloves, and was very sanitary throughout. Have very thorough aftercare instructions. Couldn’t be happier with my experiencce.'

    },

    {
        name:'Kevin Toler',
        img:'https://img.freepik.com/premium-photo/women-lifestyle-portrait-outdoors-casual-nordic_53876-85466.jpg?w=360',
        review:'The guy who did my tattoo (Hunter) was fantastic! The tattoo ended up being really high quality In terms of line work in particular. Made sure to properly clean all the machines, wear gloves, and was very sanitary throughout. Have very thorough aftercare instructions. Couldn’t be happier with my experiencce.'
    },

    {
        name:'Kevin Toler',
        img:'https://img.freepik.com/free-photo/portrait-smiling-male-colorful-sweater-tattooed-arms_613910-8019.jpg?t=st=1731595735~exp=1731599335~hmac=5e20b8f0b72c987958eb7fc29d96cc7a906ebe5bc327eb176e3fb5d34ee8d45d&w=360',
        review:'The guy who did my tattoo (Hunter) was fantastic! The tattoo ended up being really high quality In terms of line work in particular. Made sure to properly clean all the machines, wear gloves, and was very sanitary throughout. Have very thorough aftercare instructions. Couldn’t be happier with my experiencce.'
    },


    {
        name:'Kevin Toler',
        img:'https://img.freepik.com/free-photo/fashionable-attractive-tattooed-young-woman-sitting-bedroom-by-window-with-pensive-thoughtful-look_343059-913.jpg?t=st=1731595972~exp=1731599572~hmac=7c2e7cccab399fe9b7922a072e871ae80bd53e8e6b05411a0b803bf19e70dd7a&w=740',
        review:'The guy who did my tattoo (Hunter) was fantastic! The tattoo ended up being really high quality In terms of line work in particular. Made sure to properly clean all the machines, wear gloves, and was very sanitary throughout. Have very thorough aftercare instructions. Couldn’t be happier with my experiencce.'
    },

    {
        name:'Kevin Toler',
        img:'https://img.freepik.com/premium-photo/portrait-young-man-taking-selfie_1048944-19722361.jpg?w=826',
        review:'The guy who did my tattoo (Hunter) was fantastic! The tattoo ended up being really high quality In terms of line work in particular. Made sure to properly clean all the machines, wear gloves, and was very sanitary throughout. Have very thorough aftercare instructions. Couldn’t be happier with my experiencce.'
    },


   


    {
        name:'Kevin Toler',
        img:'https://img.freepik.com/premium-photo/young-woman-holding-lollipop-while-standing-park_1048944-28448118.jpg?w=360',
        review:'The guy who did my tattoo (Hunter) was fantastic! The tattoo ended up being really high quality In terms of line work in particular. Made sure to properly clean all the machines, wear gloves, and was very sanitary throughout. Have very thorough aftercare instructions. Couldn’t be happier with my experiencce.'
    },


    
    

]

export default Testimonials