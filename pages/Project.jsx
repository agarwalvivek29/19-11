import React from 'react'
import SidebarOne from '../Components/SidebarOne'
import Navbar from '../Components/Navbar'
import CardTwo from '../Components/CardTwo'

const Project = () => {
    const props = {
        details : [
          {
            image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            title : "Renewable Energy Project",
            discription : "EcoTokenMarket User",
            price: "$32" ,
          },
          {
            image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            title : "Sustainable Forest",
            discription : "Nature Lover",
            price: "$12" ,
          },
          {
            image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            title : "Ocean Plastic Cleanup",
            discription : "Climate Activist",
            price: "$15" ,
          },
          {
            image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            title : "Green Living Inspiration",
            discription : "Sustainable Solution Guide",
            price: "$23" ,
          },
          {
            image : "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            title : "Eco-Friendly Practices",
            discription : "Carbon Footprint Reduction",
            price: "$25" ,
          },
        ],
      }
  return (
    <div>
    <div className='flex-start'>
        <div>
            <Navbar />
        </div>
    </div>
    <div className='flex '>
        <div className='py-1 '>
            <SidebarOne />
        </div>
        <div className='px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {props.details.map((detail,index) =>(
                <CardTwo key={index} title={detail.title} description={detail.discription} price={detail.price} image={detail.image}/>
            ))

            }
            <CardTwo />
        </div>
    </div>
    
    </div>
  )
}

export default Project