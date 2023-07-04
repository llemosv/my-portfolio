import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';
import { ImSpinner2 } from 'react-icons/im';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({
  children,
  className,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-blue-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ImSpinner2 className="animate-spin inline-block mr-2" size={22} />
      ) : (
        children
      )}
    </button>
  );
}
