import { TechCard } from '@/components/tech-card';
import Image from 'next/image';

export function ExperienceItem() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            src="/images/zema-logo.jpg"
            className="rounded-full"
            alt="Logo empresa Zema"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a href="" target="_blank" className="text-gray-500">
            Eletrozema
          </a>
          <h4>Estagiário de Desenvolvimento</h4>
          <span className="text-gray-500">
            mai 2021 • jul 2022 • (1 ano e 2 meses)
          </span>
          <p>
            Desenvolvimento e manutenção de interfaces usando React, Vite,
            Typescript, Redux, Styled Components, e Figma. Para o planejamento
            dos sprints, é utilizado o Azure DevOps.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Stacks utilizadas:
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px] mb-8">
          <TechCard name="Next.JS" />
          <TechCard name="Next.JS" />
          <TechCard name="Next.JS" />
          <TechCard name="Next.JS" />
          <TechCard name="Next.JS" />
          <TechCard name="Next.JS" />
        </div>
      </div>
    </div>
  );
}
