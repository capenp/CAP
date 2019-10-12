import React from 'react';

const Event = (props) => {
    const {event,content,img} = props;
        return(
            <>                
    <section className="breadcrumb breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>{event}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog_area single-post-area section_padding">
        <div className="container">
           <div className="row">
              <div className="posts-list pl-4 pr-4">
                 <div className="single-post">
                    <div className="feature-img">
                       <img className="img-fluid max-width" src={process.env.PUBLIC_URL.concat("/theme/img/events/").concat(img)} alt="alm"/>
                    </div>
                    <div className="blog_details">
                       <h2>{event}
                       </h2>              
                       <p className="excert">
                          {content}
                        </p>
                    </div>
                 </div>
  
              </div>
           </div>
        </div>
     </section>
                   
            </>
        );
}

export default Event

