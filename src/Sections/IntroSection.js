import React from 'react';
import { Link } from 'react-router-dom';


const IntroSection = () => {
    return(
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1>Club d'Activités Polyvalentes</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.</p>
                            <Link to="/about" className="btn_2 banner_btn_1">Le CAP c'est quoi?</Link>
                            <Link to="/actualite" className="btn_2 banner_btn_2">Actualité</Link>
                        </div>
                    </div>
                </div>
 
            </div>
        </div>            <br/>


    </section>
    );
}

export default IntroSection;
