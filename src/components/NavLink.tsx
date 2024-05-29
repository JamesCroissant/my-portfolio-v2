// import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll'

type NavLinkProps = {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={-120}
      duration={650}
      className="text-gray-300 hover:bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 hover:text-white block px-5 py-4 rounded-md text-lg font-medium"
    >
      {title}
    </ScrollLink>
  )
}

export default NavLink; 