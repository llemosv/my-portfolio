import Image from 'next/image';
import { Button } from '@/components/button';

type ProjectCardType = {
  name: string;
  technologies: string;
  description: string;
  repositoryUrl: string;
  imageUrl: string;
};

export function ProjectCard({
  name,
  technologies,
  description,
  imageUrl,
  repositoryUrl,
}: ProjectCardType) {
  return (
    <div className="shadow-light flex flex-col min-h-[30rem] h-auto w-auto max-w-[335px] bg-blue-950/30 hover:translate-y-[-2px] transition-transform duration-200 rounded-lg">
      <div className="flex flex-grow h-[200px]">
        <Image
          width={420}
          height={104}
          src={imageUrl}
          alt="Thumbnail do projeto"
          className="w-full h-full rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start px-8 py-6 gap-4 flex-1">
        <p className="text-sm text-blue-500/80">{technologies}</p>
        <h1 className="font-medium text-lg">{name}</h1>

        <p className="text-gray-400 text-sm">{description}</p>
        <a href={repositoryUrl} target="_blank">
          <Button>Vizualizar repositório</Button>
        </a>
      </div>
    </div>
  );
}
