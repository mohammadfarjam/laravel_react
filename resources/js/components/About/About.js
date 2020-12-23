import React from 'react';
import img1 from '../../../image/img1.jpg';
import style from './About.css';


export default function About(props) {
    return (
        <section className='about_area'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='about_image'>
                            <img src={img1} alt='about us' className='img-fluid'/>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 about_title'>
                        <h2 className='text-uppercase p-4 title_text text-start'>
                            <span>let me introduce myself</span>
                        </h2>
                        <div className='paragraph py-2 w-75 mx-auto'>
                            <p className='para text-left ' style={{color:'black',direction:'ltr'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor ducimus fugit harum nemo nisi quo quod? Deserunt eius, nihil.
                            </p>
                            <p className='para text-left' style={{color:'black',direction:'ltr'}}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                           
                            </p>
                            <button type='button' className='btn button_style text-uppercase mx-auto'>Download cv</button>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )

}
