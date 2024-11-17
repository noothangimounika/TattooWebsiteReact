import React from 'react'

const ArtistesComp = () => {
  return (
    <div className='ArtistesComp-container'>
        <div className="teams-div">
            {
                data.map((item)=>{
                    return(
                        <div className='item'>
                            <img src={item.img} alt="" />
                            <h3>Artist: {item.neme}</h3>
                            {/* <p>{item.bio}</p> */}
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default ArtistesComp


const data=[
    {
        id:1,
        img:'https://img.freepik.com/premium-photo/self-employed-man_1098-7419.jpg?w=740',
        neme:'Artiste',
        bio:'I have been in this beautiful profession for 8 years, specializing in the fascinating world of realism and shadows. My passion for the art of tattooing has led me to perfect my technique and to strive more and more to capture the most minute details in my 6 creations."'
    },

    {
        img:'https://img.freepik.com/premium-photo/self-employed-man_1098-7419.jpg?w=740',
        neme:'Artiste',
        bio:'I have been in this beautiful profession for 8 years, specializing in the fascinating world of realism and shadows. My passion for the art of tattooing has led me to perfect my technique and to strive more and more to capture the most minute details in my 6 creations."'
    },


    {
        img:'https://img.freepik.com/premium-photo/self-employed-man_1098-7419.jpg?w=740',
        neme:'Artiste',
        bio:'I have been in this beautiful profession for 8 years, specializing in the fascinating world of realism and shadows. My passion for the art of tattooing has led me to perfect my technique and to strive more and more to capture the most minute details in my 6 creations."'
    },


    {
        img:'https://img.freepik.com/premium-photo/self-employed-man_1098-7419.jpg?w=740',
        neme:'Artiste',
        bio:'I have been in this beautiful profession for 8 years, specializing in the fascinating world of realism and shadows. My passion for the art of tattooing has led me to perfect my technique and to strive more and more to capture the most minute details in my 6 creations."'
    },


    {
        img:'https://img.freepik.com/premium-photo/self-employed-man_1098-7419.jpg?w=740',
        neme:'Artiste',
        bio:'I have been in this beautiful profession for 8 years, specializing in the fascinating world of realism and shadows. My passion for the art of tattooing has led me to perfect my technique and to strive more and more to capture the most minute details in my 6 creations."'
    },
]

