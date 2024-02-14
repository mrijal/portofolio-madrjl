import React, {useState} from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">
            Sevices
        </h2>
        <span className='section__subtitle'>
            Things i can do for you
        </span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-setting services__icon"></i>
                    <h3 className="services__title">System <br/> Development</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(1)}>
                    View More{" "}
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="modal__background" onClick={() => toggleTab(0)}></div>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web-based System Developer</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa suscipit quas laborum praesentium ipsum eveniet sapiente dolores aliquam delectus!
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br/> Design</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(2)}>
                    View More{" "}
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="modal__background" onClick={() => toggleTab(0)}></div>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Designer</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa suscipit quas laborum praesentium ipsum eveniet sapiente dolores aliquam delectus!
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Photo & Video <br/> Editing</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(3)}>
                    View More{" "}
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="modal__background" onClick={() => toggleTab(0)}></div>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Photo & Video Editing</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa suscipit quas laborum praesentium ipsum eveniet sapiente dolores aliquam delectus!
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
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

export default Services