
import React from 'react';


const TitleSection = (props) => {
    const {title} =props;
    return(
       <section className="breadcrumb breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default TitleSection;
