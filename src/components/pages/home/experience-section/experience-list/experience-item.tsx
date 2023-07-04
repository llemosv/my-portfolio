import { IoMdArrowDropright } from 'react-icons/io';

export function ExperienceItem({ experience }: any) {
  return (
    <div className="min-h-[200px] h-auto">
      <h2 className="font-bold text-xl">{experience.office}</h2>
      <p className="text-sm text-gray-400 font-mono mt-1">{experience.date}</p>
      {experience?.description.map((item: any) => (
        <div key={item.id} className="mt-2">
          <ul className="text-gray-400 text-sm">
            <IoMdArrowDropright className="inline-block mr-2 text-blue-400" />{' '}
            {item.text}
          </ul>
        </div>
      ))}
    </div>
  );
}
