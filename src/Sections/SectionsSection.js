
    import React from 'react';
    import { Link } from 'react-router-dom';

const SectionsSection = () => {
    return(
        <section className="use_sasu">
            <br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_tittle text-center">
                            <h2>Sections du CAP</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/sections/caritative">
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/caritative.png")} alt="caritative"/>
                                    <h4>Caritative</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <Link to="/sections/culturelle">
                        <div className="single_feature">
                            <div className="single_feature_part">
                                <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/culturelle.png")} alt="culturelle"/>
                                <h4>Culturelle</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </Link> 
                   </div>
                    <div className="col-lg-3 col-sm-6">
                    <Link to="/sections/scientifique">
                        <div className="single_feature">
                            <div className="single_feature_part">
                                <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/scientifique.png")} alt="scientifique"/>
                                <h4>Scientifique</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
            <br/>
    </section>

 
    );
}

export default SectionsSection;
