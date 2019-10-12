import React from 'react';


const InfosSection = () => {
    return(
        <section className="feature_part padding_top">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 ">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6">
                            <div className="single_feature">
                                    <a href="https://www.facebook.com/CAP.ENP/">
                                        <div className="single_feature_part" >
                                            <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/facebook.svg")} alt="facebook"/>
                                            <h4>@CAP.ENP</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                   </a>
                                </div>
        
                                <div className="single_feature">
                                    <a href="https://www.linkedin.com/in/cap-enp/">
                                        <div className="single_feature_part" >
                                            <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/linkedin.svg")} alt="Linkedin"/>
                                            <h4>CAP ENP</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                   </a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <div className="single_feature">
                                    <a href="https://www.instagram.com/cap.enp/">
                                        <div className="single_feature_part">
                                        <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/instagram.svg")} alt="Instagram"/>
                                            <h4>@cap.enp</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                   </a>
                                </div>

                                <div className="single_feature">
                                    <a href="https://www.youtube.com/user/CAPENP/">
                                        <div className="single_feature_part single_feature_part_2">
                                        <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/youtube.svg")} alt="Youtube"/>
                                            <h4>Cap Polytech'</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-lg-5">
                        <div className="feature_part_text">
                            <h2>Une grande famille</h2>
                            <p>Le CAP ne cesse de s’agrandir, nous sommes plus de 20.000 sur la page facebook et cela grâce à vous ! Un grand merci de la part de l’ensemble des CAPistes, qui vous remercie de votre fidélité et vos encouragements.Espérant toujours vous satisfaire, restez branchés pour plus de surprises. #CAP #20k.</p>
                            <div className="row">
                                <div className="col-sm-6 col-md-4 col-lg-5" href="about">
                                    <div className="feature_part_text_iner">
                                    <h4>300</h4>
                                    <p>Membres </p>
                                    </div>
                                </div>
                            <div className="col-sm-6 col-md-4 col-lg-5" href="about">
                                <div className="feature_part_text_iner">
                                <h4>20k</h4>
                                <p>J'aimes sur facebook</p>
                            </div>
                        </div>
                    </div>

                    <a href="https://www.facebook.com/CAP.ENP" className="btn_4">Visitez notre page facebook. <img src={process.env.PUBLIC_URL.concat("/theme/img/icon/right-arrow.svg")} alt="facebook"/></a>
                </div>
            </div>

        
        </div>
        </div>            <br/>


        </section>
    );
}

export default InfosSection;