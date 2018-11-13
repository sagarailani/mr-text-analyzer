import React from 'react';

export default class Service extends React.Component {

  render() {

    return(
      <section className="service" id="service">
        <div className="container">
          <div className="_section-wrapper">
            <h2 className="section-title black">
              how it works
            </h2>
            <div className="underline purple"></div>
            <div className="row">
              <div className="">
                <img src="assets/images/8" alt="service" className="service-img img-responsive" />
              </div>
              <div className="col-md-offset-5 col-md-8 col-sm-12 services">
                <div className="row">
                  <div className="col-md-5 col-xs-6 col-sm-4">
                    <div className="service-item">
                      <h3 className="section-item-title">
                        Grammar Analysis
                      </h3>
                      <p className="section-item-detail">
                        The tool checks for any grammar errors in your answers, and states the correct sentences in the final report.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 col-xs-6 col-sm-4">
                    <div className="service-item">
                      <h3 className="section-item-title">
                        better vocabulary
                      </h3>
                      <p className="section-item-detail">
                        If quality of your answers can be improved by enhancing vocabulary, the tool will suggest those words in final report. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-xs-6 col-sm-4">
                    <div className="service-item">
                      <h3 className="section-item-title">
                        relevance of answers
                      </h3>
                      <p className="section-item-detail">
                        Sometimes, your answers may deviate from the point or topic, that the questions wants to write about, our tool will find those sentences, and notify!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 col-xs-6 col-sm-4">
                    <div className="service-item">
                      <h3 className="section-item-title">
                        Spell Check
                      </h3>
                      <p className="section-item-detail">
                        If there are any spelling errors in your answers, the tool will state those in the report.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>


    );

  }

}