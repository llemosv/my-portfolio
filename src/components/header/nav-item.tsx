import { Link } from 'react-scroll';

type NavItemProps = {
  id: string;
  label: string;
  href: string;
  onClick?: () => void;
};

export function NavItem({ id, label, href, onClick }: NavItemProps) {
  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      onClick={onClick}
      className="text-gray-300 flex items-center gap-2 font-medium text-sm font-mono hover:text-blue-400 transition duration-200 cursor-pointer"
    >
      <span className="text-blue-400 text-xs">{id}. </span>
      {label}
    </Link>
  );
}
