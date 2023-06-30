import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  id: string;
  label: string;
  href: string;
};

export function NavItem({ id, label, href }: NavItemProps) {
  const pathname = usePathname();

  const isActiveRouter = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono hover:text-blue-400 transition duration-200',
        isActiveRouter && 'text-gray-200'
      )}
    >
      <span className="text-blue-400 text-sm">{id}. </span>
      {label}
    </Link>
  );
}
