import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

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

export default function SocialIcons() {
  return (
    <div className="col-lg-3 px-5">
      <div className="d-inline-flex align-items-center py-2">
        {socialIcons.map((val, index) => (
          <div key={index}>
            <Link className="me-3" href="">
              <FontAwesomeIcon icon={val.icon} className="text-primary h-6 w-6 ml-5 md:ml-5"/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
