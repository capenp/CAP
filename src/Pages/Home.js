import React from '../../node_modules/react';

import IntroSection from '../Sections/IntroSection';
import InfosSection from '../Sections/InfosSection';
import PolymagSection from '../Sections/PolymagSection';
import ContactSection from '../Sections/ContactSection';
import NewsletterSection from '../Sections/NewsletterSection';
import SectionsSection from '../Sections/SectionsSection';

const Home = () => {
    return(
        <div >
            <IntroSection />
            <InfosSection/>
            <SectionsSection/>
            <PolymagSection/>
            <NewsletterSection/>
            <ContactSection/>
        </div>
    );
}

export default Home;
