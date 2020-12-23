import React from 'react';
import style from './Service.css';
import imgService from '../../../image/advertising.jpg'

export default function Service(props) {
    return (
        <div className='services_area'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h1 className='text-uppercase text_title'>Services Offers</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor ducimus fugit harum nemo nisi quo quod? Deserunt eius, nihil.</span>
                    </div>
                    {/* col-lg-12 */}
                </div>
                {/* row */}

                <div className='container services_list'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='services'>
                                <div className='services_img text-center py-4'>
                                    <img src={imgService} className='img-fluid'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title text-uppercase text-dark mx-auto text-center' style={{fontSize:'18px'}}>web developer</h5>
                                    <p className='card-text text-secondary text-center mx-auto'> It is a long established fact that a reader will be distracted by the readable
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col-lg-3 */}

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='services'>
                                <div className='services_img text-center py-4'>
                                    <img src={imgService} className='img-fluid'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title text-uppercase text-dark mx-auto text-center' style={{fontSize:'18px'}}>web developer</h5>
                                    <p className='card-text text-secondary text-center mx-auto'> It is a long established fact that a reader will be distracted by the readable
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col-lg-3 */}

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='services'>
                                <div className='services_img text-center py-4'>
                                    <img src={imgService} className='img-fluid'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title text-uppercase text-dark mx-auto text-center' style={{fontSize:'18px'}}>web developer</h5>
                                    <p className='card-text text-secondary text-center mx-auto'> It is a long established fact that a reader will be distracted by the readable
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col-lg-3 */}

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='services'>
                                <div className='services_img text-center py-4'>
                                    <img src={imgService} className='img-fluid'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title text-uppercase text-dark mx-auto text-center' style={{fontSize:'18px'}}>web developer</h5>
                                    <p className='card-text text-secondary text-center mx-auto'> It is a long established fact that a reader will be distracted by the readable
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col-lg-3 */} 
                    </div>
                    {/* rowr */}
                </div>
                {/* container */}
            </div>
            {/* container */}
        </div>
        // services_area
    )
}