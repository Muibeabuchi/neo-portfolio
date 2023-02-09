import { useState } from 'react';
import './Services.css';

const Services = () => {

    const [toggleModal,setToggleModal] = useState(0);
    const toggleIndex=(index)=>{
        setToggleModal(index);
    }
  return (
    <section className="section services" id='Services'>
            <h2 className="section__title">Services</h2>
            <span className='section__subtitle'>What I Offer</span>
        <div className="services__container grid container">
            <div className="services__content">
                <div>
                    <i className="uil uil-react services__icon"></i>
                    <h3 className="services__title">
                    ReactJS  
                    </h3>
                </div>
                <span className='services__button' onClick={()=>toggleIndex(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleModal===1?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleIndex(0)}></i>
                        
                        <h3 className="services__modal-title">ReactJS web development:</h3>
                        <p className="services__modal-description">
                            Service with a year of experience. Ready to provide quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Developing dynamic and interactive user interfaces using ReactJS.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Single-Page Application (SPA) development: Building modern web applications that are fast, responsive, and easy to navigate.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">React component development: Developing reusable and custom components to be used in different React applications</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-browser compatibility: Ensuring that React web applications are compatible with a wide range of browsers and devices.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integration with third-party APIs: Integrating React web applications with APIs and other back-end services.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX</h3>
                </div>
                <span className='services__button' onClick={()=>toggleIndex(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleModal===2?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleIndex(0)}></i>
                        
                        <h3 className="services__modal-title">UI/UI DESIGN</h3>
                        <p className="services__modal-description">
                            Service with a year of experience. Ready to provide quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon" ></i>
                                <p className="services__modal-info">ReactJS web development: Developing dynamic and interactive user interfaces using ReactJS.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Single-Page Application (SPA) development: Building modern web applications that are fast, responsive, and easy to navigate.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">React component development: Developing reusable and custom components to be used in different React applications</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-browser compatibility: Ensuring that React web applications are compatible with a wide range of browsers and devices.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integration with third-party APIs: Integrating React web applications with APIs and other back-end services.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            

            <div className="services__content">
                <div>
                    <i className="uil uil-css3-simple services__icon"></i>
                    <h3 className="services__title">CSS</h3>
                </div>
                <span className='services__button' onClick={()=>toggleIndex(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleModal===3?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleIndex(0)}></i>
                        
                        <h3 className="services__modal-title">CSS3</h3>
                        <p className="services__modal-description">
                            Service with a year of experience. Ready to provide quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon" ></i>
                                <p className="services__modal-info">ReactJS web development: Developing dynamic and interactive user interfaces using ReactJS.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Single-Page Application (SPA) development: Building modern web applications that are fast, responsive, and easy to navigate.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">React component development: Developing reusable and custom components to be used in different React applications</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-browser compatibility: Ensuring that React web applications are compatible with a wide range of browsers and devices.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integration with third-party APIs: Integrating React web applications with APIs and other back-end services.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services;