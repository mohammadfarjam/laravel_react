import React from 'react';
import baner from '../../../image/baner.jpg'
import style from './Baner.css';


export default function Baner(props) {
    return (
        <section className='site_banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 site_title'>
                        <h3>Hey</h3>
                        <h1 className='title_text text-uppercase'>I am Mohammad</h1>
                        <h4 className='title_text text-uppercase'>Web Devoleper</h4>
                        <div className='site_buttons'>
                            <div className='d-flex flex-row flex-wrap'>
                                <button type='button' className=' mr-4 text-uppercase button_style'>hire me</button>
                                <button type='button' className='btn mr-4 text-uppercase button_secondery'>get cv</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 banner_image'>
                        <img src={baner} className='img-fluid'/>
                    </div>
                </div>
            </div>

        </section>
    )
}
