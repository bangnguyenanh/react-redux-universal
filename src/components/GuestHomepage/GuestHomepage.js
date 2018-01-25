import React from 'react';
import PortfolioBox from 'components/PortfolioBox/PortfolioBox';
import ServiceBox from 'components/ServiceBox/ServiceBox';

const GuestHomepage = () => {
  const styles = require('./GuestHomepage.scss');
  const imgThumb1 = require('./img/portfolio/thumbnails/1.jpg');
  const imgThumb2 = require('./img/portfolio/thumbnails/2.jpg');
  const imgThumb3 = require('./img/portfolio/thumbnails/3.jpg');
  const imgThumb4 = require('./img/portfolio/thumbnails/4.jpg');
  const imgThumb5 = require('./img/portfolio/thumbnails/5.jpg');
  const imgThumb6 = require('./img/portfolio/thumbnails/6.jpg');

  return (
    <div>
      <header className={`${styles.masthead} text-center text-white d-flex`}>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <h1 className="text-uppercase">
                <strong>Your Favorite Source of Free Bootstrap Themes</strong>
              </h1>
              <hr />
            </div>
            <div className="col-lg-12 mx-auto">
              <p className="text-faded mb-5">
                Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download
                    your template and start going, no strings attached!
              </p>
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center">
              <h2 className="section-heading text-white">We've got what you need!</h2>
              <hr className="light my-4" />
              <p className="text-faded mb-4">
                Start Bootstrap has everything you need to get your new website up and running in no time! All of the
                    templates and themes on Start Bootstrap are open source, free to download, and easy to use.
                    No strings attached!
              </p>
              <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">At Your Service</h2>
              <hr className="my-4" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <ServiceBox
                title="Sturdy Templates"
                description="Our templates are updated regularly so they don't break."
                icon="fa-diamond"
              />
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <ServiceBox
                title="Ready to Ship"
                description="You can use this theme as is, or you can make changes!"
                icon="fa-paper-plane"
              />
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <ServiceBox
                title="Up to Date"
                description="We update dependencies to keep things fresh."
                icon="fa-newspaper-o"
              />
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <ServiceBox
                title="Made with Love"
                description="You have to make your websites with love these days!"
                icon="fa-heart"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox link="xxx" projectCategory="Category" projectName="Project Name" thumbnailUrl={imgThumb1} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox link="xxx" projectCategory="Category" projectName="Project Name" thumbnailUrl={imgThumb2} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox link="xxx" projectCategory="Category" projectName="Project Name" thumbnailUrl={imgThumb3} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox link="xxx" projectCategory="Category" projectName="Project Name" thumbnailUrl={imgThumb4} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox link="xxx" projectCategory="Category" projectName="Project Name" thumbnailUrl={imgThumb5} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox link="xxx" projectCategory="Category" projectName="Project Name" thumbnailUrl={imgThumb6} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
          <a
            className="btn btn-light btn-xl sr-button"
            href="http://startbootstrap.com/template-overviews/creative/"
          >
            Download Now!
          </a>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center">
              <h2 className="section-heading">Let's Get In Touch!</h2>
              <hr className="my-4" />
              <p className="mb-5">
                Ready to start your next project with us? That's great! Give us a call or send us an email and we will
                    get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ml-auto text-center">
              <i className="fa fa-phone fa-3x mb-3 sr-contact" />
              <p>123-456-6789</p>
            </div>
            <div className="col-lg-6 mr-auto text-center">
              <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" />
              <p>
                <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestHomepage;
