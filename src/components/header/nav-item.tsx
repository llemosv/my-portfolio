import { Link } from 'react-scroll';

type NavItemProps = {
  id: string;
  label: string;
  href: string;
};

export function NavItem({ id, label, href }: NavItemProps) {
  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      className="text-gray-300 flex items-center gap-2 font-medium font-mono hover:text-blue-400 transition duration-200 cursor-pointer"
    >
      <span className="text-blue-400 text-sm">{id}. </span>
      {label}
    </Link>
  );
}
