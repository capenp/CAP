import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return(
    <footer className="footer_part">
        <div className="container">
            <div className="row">
                <div className="container">
                    <div className="footer_icon social_icon">
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/CAP.ENP/" className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href= "https://www.linkedin.com/in/cap-enp/" className="single_social_icon"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://www.youtube.com/user/CAPENP/" className="single_social_icon"><i className="fab fa-youtube"></i></a></li>
                            <li><a href= "https://www.instagram.com/cap.enp/" className="single_social_icon"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="copyright_text">
                        <p>Copyright   &copy;<script>document.write(new Date().getFullYear());</script>  
                        <Link to="/" target="_blank">   Club d'Activités Polyvalentes 2019 </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br/>


    </footer>
    );
}

export default FooterSection;
