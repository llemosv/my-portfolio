import { ExperienceType } from '@/types/page';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IoMdArrowDropright } from 'react-icons/io';

type ExperienceItemProps = {
  experience: ExperienceType | undefined;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { startDate, endDate } = experience!;

  const startDateFormatted = format(new Date(startDate), 'MMM yyyy', {
    locale: ptBR,
  });
  const endDateFormatted = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'Presente';
  return (
    <div className="min-h-[200px] h-auto">
      <h2 className="font-bold text-xl">{experience!.office}</h2>
      <p className="text-sm text-gray-400 font-mono mt-1">
        {startDateFormatted} - {endDateFormatted}
      </p>
      {experience?.experienceDescriptions.map((item: any) => (
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
