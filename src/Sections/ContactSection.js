import React from 'react';


const ContactSection = () => {
    return(
        


<section className="use_sasu">
    <div className="container">
    <br/>

        <div className="row">
            <div className="col-12">
                <h2 className="contact-title">Contact</h2>
            </div>
            
            <div className="col-lg-4">
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-home"></i></span>
                        <div className="media-body">
                            <h3>Ecole Nationale Polytechnique (ENP) </h3>
                            <p>10 Rue des Frères OUDEK, El-Harrach 16200</p>
                        </div>
                </div>

                <div className="media contact-info">    
                    <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                        <div className="media-body">
                            <h3>0000000000</h3>
                            <p>Par telephone</p>
                        </div>
                </div>

                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-email"></i></span>
                        <div className="media-body">
                            <h3>@cap.com</h3>
                            <p>Par mail</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
</section>

 
    );
}

export default ContactSection;
