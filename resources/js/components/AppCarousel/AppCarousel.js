import React from 'react';
import { Carousel } from 'antd';
import imgCarousel from '../../assets/bg-works.jpg';
import imgCarousel2 from '../../assets/modern-design.jpg';
import imgCarousel3 from '../../assets/great-support.jpg';


export default function AppCarousel(props) {
    const contentStyle = {
        height: '600px',
        width:'100%',
      
      
       
      };
    return (


        <Carousel autoplay>
            <div>
            <img src={imgCarousel} style={contentStyle}/>
            </div>
            <div>
            <img src={imgCarousel2} style={contentStyle}/>
            </div>
            <div>
            <img src={imgCarousel3} style={contentStyle}/>
            </div>
        
        </Carousel>


    )
}


