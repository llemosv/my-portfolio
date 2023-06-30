import { getRelativeTimeString } from '@/utils/get-relative-time';
import { ReactNode } from 'react';

type CardSkillProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate?: string;
  };
};
export function CardSkill({ tech }: CardSkillProps) {
  let relativeTime;
  if (tech.startDate) {
    relativeTime = getRelativeTimeString(
      new Date(tech.startDate),
      'pt-BR'
    ).replace('há ', ' ');
  }

  return (
    <div className="text-gray-400 bg-blue-950/60 p-6 justify-center gap-2 rounded-lg flex flex-col hover:text-blue-400 hover:bg-blue-950/80 hover:translate-y-[-1.5px] transition-transform ">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      {relativeTime && (
        <span className="text-sm">{relativeTime} de experiência</span>
      )}
    </div>
  );
}
