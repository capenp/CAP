import React from '../../node_modules/react';

import TitleSection from '../Sections/TitleSection';


const About = () => {
    return(
                    <>
    <TitleSection title="A Propos"/>     

    <section className="blog_area single-post-area section_padding">
        <div className="container">
           <div className="row">
              <div className="posts-list pl-4 pr-4">
                 <div className="single-post">

                    <div className="blog_details">
                       <h2>C'est quoi le cap?
                       </h2>              

                        <p className="excert">Le CAP (Club d'Activités Polyvalentes) est un club estudiantin de l'Ecole Nationale Polytechnique, proposant des activités scientifiques, culturelles, caritatives et sportives. Créé en 2010 à l’initiative d’un groupe d’étudiants, qui avaient pour ambition de nettoyer l'école, le club n’a pas cessé de s’agrandir, de se faire connaître et de diversifier ses activités.</p>  
                        <p className="excert">On y compte aujourd'hui un effectif d’environ 300 membres, qui organisent et prennent part aux nombreux projets captivants. Chaque membre appartient à un des quatre départements au sein du CAP : communication, informations et technologie, ressources humaines et relations extérieurs. Avec cette organisation le club détient à son actif une dizaine d’événements dans divers domaines chaque année.</p> 

                        <h4>Le club est pourvu de 3 sections pour assurer le déroulement de ses activités :</h4>
        <p className="excert">
        Une <strong>section caritative</strong> œuvrant dans la bienfaisance et qui a pour but d’apporter de l’aide aux plus démunis.<br/>
        Une <strong>section scientifique </strong> qui contribue dans la formation de ses membres, l’enrichit, et leur permet de partager leur passion des sciences.<br/> 
        Une <strong>section culturelle</strong> qui permet de se détendre de la pression continue des études, et qui elle-même est composée de plusieurs sous-section : musicale, sportive, théâtrale et littéraire.<br/>   
        </p>       
        <img className="img-fluid max-width align-center" src={process.env.PUBLIC_URL + '/theme/img/about/cap-1-2.jpg'} width="800" length="800" alt="alm" />
 
                    </div>

                 </div>
  
              </div>
           </div>
       
        </div>
 
     </section>
                   
            </>
    );
}

export default About;


