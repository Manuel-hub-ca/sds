import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  const socials = [
    // { icon: faEnvelope, url: "mailto:tyelectrique@gmail.com" },
    { icon: faFacebook, url: "https://www.facebook.com/tyelectrique/" },
    { icon: faInstagram, url: "https://www.instagram.com/tyelectrique/" },
    { icon: faLinkedin, url: "" },
    { icon: faTiktok, url: "" },
  ];

  return (
    <div className="flex w-80 justify-around items-center">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.url}
          className="transition-transform duration-300 ease-in-out hover:scale-110 text-gray-300 hover:text-[#4D5C5A]"
        >
          <FontAwesomeIcon icon={s.icon} className="w-8 h-8 mx-2.5" />
        </a>
      ))}
    </div>
  );
}
