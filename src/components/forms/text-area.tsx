import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export function TextArea(props: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <textarea
      id={props.name}
      className="flex-1 rounded-md bg-gray-700/60 shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-h-[12vh]"
      {...register(props.name)}
      {...props}
    />
  );
}
