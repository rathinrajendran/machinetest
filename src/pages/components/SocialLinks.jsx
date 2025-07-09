import Social from "../../components/Social";
import fb from './assets/img/fb.webp';
import google from './assets/img/google.webp';
import linkedin from './assets/img/linkedin.webp';
import twitter from './assets/img/twitter.webp';

const socialLinks = [
  { name: "Google", link: "https://www.google.com", icon: google },
  { name: "Facebook", link: "https://www.facebook.com", icon: fb },
  { name: "LinkedIn", link: "https://www.linkedin.com", icon: linkedin },
  { name: "Twitter", link: "https://www.twitter.com", icon: twitter },
];

const SocialLinks = () => {
  return (
    <div className="d-flex justify-content-around mt-2">
      {socialLinks.map(({ name, link, icon }) => (
        <Social key={name} label={name} link={link} icon={icon} />
      ))}
    </div>
  );
};


export default SocialLinks;
