import React, { useState } from 'react';
import Slider from "react-slick";
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const [expandedComment, setExpandedComment] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const handleReadMore = (index) => {
        setExpandedComment(expandedComment === index ? null : index);
    };

    return (
        <div className="w-3/4 m-auto bg-white">
            <h1 style={{ textAlign: 'center', fontSize: '70px', marginTop: '20px', marginBottom: '20px' }}>What our Clients say</h1>
            <p style={{ textAlign: 'center', fontSize: '22px' }}>
                Our clients inspire us with their creativity and trust, and we’re proud <br />
                to share their experiences. Whether it’s their first tattoo or the next <br />
                chapter in their ink journey, these testimonials are a testament to <br /> the
                passion, skill, and care we put into every piece.
            </p>
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="bg-white h-[450px] text-black rounded-xl shadow">
                            <div className="h-56 rounded p-3 shadow-sm d-flex justify-content-center" id="testimonials">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                                />
                            </div>
                            <div className="flex flex-col items-center bg-info gap-4 p-4 bg-light rounded p-3">
                                <p className="text-xl fs-5 fw-semibold font-semibold">{item.review}</p>
                                <p className="fs-6">{item.name}</p>
                                <button
                                    className="btn btn-primary text-white text-lg px-6 py-1 rounded-xl"
                                    onClick={() => handleReadMore(index)}
                                >
                                    {expandedComment === index ? "Read Less" : "Read More"}
                                </button>
                                {expandedComment === index && (
                                    <div className="mt-3">
                                        <p>{item.para}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const data = [
    {
        img: 'https://img.freepik.com/premium-photo/waiting-session-muscled-good-looking-man-crossing-his-hands-covered-tattoos-while-wearing-blue-t-shirt_259150-37739.jpg?w=360',
        review: 'An Amazing Experience!',
        name: '— Jessica R.',
        para: 'I couldn’t be happier with my tattoo! The artist listened to my ideas and created a design that was better than I could have imagined. The studio was clean, professional, and welcoming. I’ll definitely be back for more ink'
    },
    {
        name: '— Emily T.',
        img: 'https://img.freepik.com/premium-photo/women-lifestyle-portrait-outdoors-casual-nordic_53876-85466.jpg?w=360',
        review: 'Incredibly Professional ',
        para: 'As someone getting their first tattoo, I was nervous, but the team made me feel at ease right away. They explained the whole process and ensured I was comfortable. Now I have a tattoo I love and can’t wait to show off!'
    },
    {
        name: '— Michael D.',
        img: 'https://img.freepik.com/free-photo/portrait-smiling-male-colorful-sweater-tattooed-arms_613910-8019.jpg?t=st=1731595735~exp=1731599335~hmac=5e20b8f0b72c987958eb7fc29d96cc7a906ebe5bc327eb176e3fb5d34ee8d45d&w=360',
        review: 'Top-Notch Talent!',
        para: 'I was blown away by how clean and organized the studio was. The artist took the time to understand what I wanted and delivered a design that exceeded my expectations. Amazing work!'
    },
    {
        name: '— Sarah P.',
        img: 'https://img.freepik.com/free-photo/fashionable-attractive-tattooed-young-woman-sitting-bedroom-by-window-with-pensive-thoughtful-look_343059-913.jpg?t=st=1731595972~exp=1731599572~hmac=7c2e7cccab399fe9b7922a072e871ae80bd53e8e6b05411a0b803bf19e70dd7a&w=740',
        review: 'Clean, Safe, and Creative!',
        para: 'This is my go-to tattoo studio! The artists are incredibly skilled, and they always bring my ideas to life perfectly. If you’re looking for quality work and a friendly environment, this is the place!'
    },
    {
        name: '— Lisa K.',
        img: 'https://img.freepik.com/premium-photo/young-woman-holding-lollipop-while-standing-park_1048944-28448118.jpg?w=360',
        review: 'Exceeded My Expectations!',
        para: 'From the moment I walked in, I felt comfortable and well taken care of. The attention to detail and creativity blew me away. This is the best tattoo experience I’ve ever had!'
    },
    {
        name: '— Kevin Toler.',
        img: 'https://img.freepik.com/premium-photo/portrait-young-man-taking-selfie_1048944-19722361.jpg?w=826',
        review: 'A True Work of Art!',
        para: 'The team here is incredible—talented, professional, and friendly. They worked with me to design a piece that perfectly reflects my personality. I’ll definitely be recommending this place to my friends!'
    },
];

export default Testimonials;
