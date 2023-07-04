import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="flex-1 w-full rounded-md bg-gray-700/60 shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...register(props.name)}
      {...props}
    />
  );
}
