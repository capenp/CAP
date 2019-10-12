    import React from 'react';
    import { Link } from 'react-router-dom';


const PolymagSection = () => {
    return(
    <section className="about_us section_padding">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <h2>PolyMag</h2>
                        <p>PolytechMag est un magazine édité par le Club d'Activités Polyvalentes de l'École Nationale Polytechnique.

PolyMag est un magazine ouvert sur le monde de la science et de la culture, témoignant de la diversité des centres d’intérêt des étudiants et des enseignants de l’École Nationale Polytechnique.

Une ligne rédactionnelle souple et polyvalente fait de ce projet une œuvre enrichissante à laquelle chaque membre de la communauté polytechnicienne peut participer. PolyMag est créé par les étudiants pour un lectorat qui dépasse les frontières de l’École.</p>
                        <a href="https://fr.calameo.com/accounts/5862274" className="btn_1">Nos Publications</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="learning_img">
                        <img src={process.env.PUBLIC_URL.concat("/theme/img/polytechmag.jpg")} alt="polytechmag"/>
                    </div>
                </div>
            </div>
        </div>
        <br/>

    </section>
    );
}

export default PolymagSection;
