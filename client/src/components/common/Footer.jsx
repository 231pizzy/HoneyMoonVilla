import { Link } from "react-router-dom";
import {footerItem} from "../data/Data";
import Newsletter from "../home/Newsletter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const footerContact = [
  {
    icon: faLocation,
    name: "No 9 Old Anglican Road Nsukka, Beside Nsukka High School, Enugu, Nigeria",
  },
  {
    icon: faPhone,
    name: "+234908141785",
  },
  {
    icon: faEnvelope,
    name: "honeymoonvillahotel@gmail.com",
  },
];

const socialIcons = [
  {
    icon: faFacebook,
  },
  {
    icon: faTwitter,
  },
  {
    icon: faInstagram,
  },
  {
    icon: faYoutube,
  },
];

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-3">HONEYMOON VILLA</h1>
                </Link>
                <p className="text-white mb-0">
                We look forward to exceeding your expectations and creating unforgettable experiences for you. See you soon!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  <FontAwesomeIcon icon={val.icon} className="text-primary"/>  {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                   <Link key={index} className="btn btn-outline-light btn-social" href="">
                   <FontAwesomeIcon icon={val.icon} />
                 </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a className="btn btn-link" href="" key={itemIndex}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
