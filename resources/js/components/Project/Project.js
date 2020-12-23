import React, { Component } from 'react';
import style_project from './project.css';
import project1 from '../../../image/project1.jpg';
import project2 from '../../../image/project2.jpg';
import project3 from '../../../image/project3.jpg';
import project4 from '../../../image/project4.jpg';
import project5 from '../../../image/project5.jpg';
import isotope from '../../../../public/js/isotope_jquery';
import $ from 'jquery';




export default function Project(props) {
    ComponentDidMount(){

    };
    return (
        <section className='project_area mt-5'>
            <div className='container'>
                <div className='project_title pb-5'>
                    <h1 className='text-uppercase title_h1'>Recently Done Project</h1>
                    <h1 className='text-uppercase title_h1'>Quality Work</h1>

                </div>
                {/* project_title  */}

                <div className='button_group'>
                    <button type='button' className='active'>All</button>
                    <button type='button' data-filter='.popular'>Popular</button>
                    <button type='button' data-filter='.latest'>Latest</button>
                    <button type='button'>Following</button>
                    <button type='button'>Upcoming</button>
                </div>
                {/* button-group */}

                <div className='row grid'>
                    <div className='col-lg-4 col-md-6 col-sm-12 element_item latest'>
                        <div className='our_project'>
                            <div className='img'>
                                <img src={project1} className='img-fluid' />
                            </div>

                            <div className='title py-4'>
                                <h4 className='text-uppercase'>Minimul Design</h4>
                                <span className='text-secondary'>Latest,Portfolio</span>
                            </div>
                        </div>
                        {/*our_project*/}
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 element_item popular'>
                        <div className='our_project'>
                            <div className='img'>
                                <img src={project2} className='img-fluid' />
                            </div>

                            <div className='title py-4'>
                                <h4 className='text-uppercase'>Paint Wall</h4>
                                <span className='text-secondary'>Popular,Portfolio</span>
                            </div>
                        </div>
                        {/*our_project*/}
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 element_item popular'>
                        <div className='our_project'>
                            <div className='img'>
                                <img src={project3} className='img-fluid' />
                            </div>

                            <div className='title py-4'>
                                <h4 className='text-uppercase'>Female light</h4>
                                <span className='text-secondary'>Popular,Portfolio</span>
                            </div>
                        </div>
                        {/*our_project*/}
                    </div>
                </div>
                {/* row grid */}

            </div>
            {/* container */}

        </section>
    )
}




