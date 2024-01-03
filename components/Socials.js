// next links
import Link from "next/link";

// icons
import { RiTwitterLine, RiLinkedinLine, RiGithubLine} from "react-icons/ri"

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/aayushrestha/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={'https://github.com/aayush105'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={'https://twitter.com/aayushrestha5'} className="hover:text-accent transition-all duration-300">
      <RiTwitterLine />
    </Link>
  </div>;
};

export default Socials;
