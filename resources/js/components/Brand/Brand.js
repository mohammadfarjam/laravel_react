import React from 'react';
import style from './brand.css';
import brand from '../../../image/brand-1.jpg';

export default function Brand(props) {
    return (
        <section className='brand_area'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-12 col-md-12'>
                        <div className='first_row row'>
                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}

                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}

                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}

                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}

                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}

                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}

                       
                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}


                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/}


                             <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='single_brand overflow-hidden'>
                                    <img src={brand} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/*col-lg-4*/} 
                           




                        </div>
                        {/*row*/}
                    </div>
                    {/*col*/}

                    <div className='col-xl-6 col-lg-12 col-md-12'>
                        <div className='experience_area'>
                            <div className='d-flex flex-row years_area'>
                                  <h2 className='p-3 years'>10</h2>
                                <h2>
                                    <span>Years </span>
                                    <span>Experience </span>
                                    <span>Working </span>
                                </h2>
                            </div>

                            <div className='d-flex flex-row flex-wrap call_area'>
                                <span><i className='fas fa-phone-alt fa-3x' /></span>
                                <div className='call_now'>
                                    <a href='#' className='text-uppercase h4 font_roboto'>Call Now </a>
                                    <span className='font_roboto py-2'>(+98)-123-456-789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*col-xl-6*/}

                </div>
                {/*row*/}
            </div>
            {/*container-fluid*/}
        </section>
    )
}
