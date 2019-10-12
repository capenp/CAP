import React from 'react';
import { Link } from 'react-router-dom';




const NavbarSection = () => {
    return(

    <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">

        <nav className="navbar navbar-expand-lg navbar-light">
            <br/>
            <div className="navbar-brand" >
                <br/>
                <img src={process.env.PUBLIC_URL.concat("/theme/img/cap_sghir.png")} width="130" length="50" alt="logo"/>
             </div>
            <br/>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu_icon"><i className="fas fa-bars"></i></span>
            </button>

            <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Accueil</Link></li>
                    <li className="nav-item"><Link to="/actualite" className="nav-link">Actualité</Link></li>
                    <li className="nav-item"><Link to="/polymag" className="nav-link">PolyMag</Link></li>
                    <li className="nav-item dropdown">
                        <Link to="/evenements" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Evenements</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/evenements/alumni" className="dropdown-item">AlumniDay</Link>
                                <Link to="/evenements/bal" className="dropdown-item">Bal des polytechniciens</Link>
                                <Link to="/evenements/celebra" className="dropdown-item">Celebra Science</Link>
                                <Link to="/evenements/charity" className="dropdown-item">Charity Festival</Link>
                                <Link to="/evenements/don-de-sang" className="dropdown-item">Don de sang</Link>
                                <Link to="/evenements/interspe" className="dropdown-item">Interspé</Link>
                                <Link to="/evenements/mun" className="dropdown-item">Model united nations</Link>
                                <Link to="/evenements/sms" className="dropdown-item"> Stock Market Simulation</Link>
                                <Link to="/evenements/unleash" className="dropdown-item">Unleash</Link>
                                <Link to="/evenements/wikistage" className="dropdown-item">WikiStage</Link>
                            </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Qui sommes-nous?</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-item">
                <Link to="/contact" className="genric-btn primary circle">Contact</Link>
            </div>

        </nav>
        </div>
            </div>
        </div>
        <br/>
    </header>




    );
}

export default NavbarSection;
