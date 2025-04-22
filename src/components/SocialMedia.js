import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia() {
  const socials = [
    { icon: faEnvelope, url: "mailto:s.d.srenovation2024@gmail.com" },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/share/1AFae6MbPF/?mibextid=wwXIfr",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/sds_constructtion?igsh=MzFzbXR3MW5xdHVs&utm_source=qr",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@sds_construction?_t=ZM-8vjR8HbN9an&_r=1",
    },
  ];

  return (
    <div className="flex w-80 justify-around items-center">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 ease-in-out hover:scale-110 text-gray-300 hover:text-[#4D5C5A]"
        >
          <FontAwesomeIcon icon={s.icon} className="w-8 h-8 mx-2.5" />
        </a>
      ))}
    </div>
  );
}
