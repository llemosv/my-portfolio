import Image from 'next/image';
import { Button } from '@/components/button';

export function ProjectCard() {
  return (
    <div className="shadow-light flex flex-col h-auto w-auto max-w-[335px] bg-blue-950/30 hover:translate-y-[-2px] transition-transform duration-200 rounded-lg">
      <div className="flex flex-grow">
        <Image
          width={420}
          height={104}
          src="https://camo.githubusercontent.com/4adf91e32910e057803b3414d25b1d1c65fc8c476b438ee52e773d516ca6a66e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f76696c6d6172626174697374612f696d6167652f75706c6f61642f76313637313635363330302f446576656c6f706d656e742f49676e6974652f64746d6f6e65795f7265636b6b6b2e706e67"
          alt="Thumbnail do projeto"
          className="w-full h-full rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start px-8 py-6 gap-4 h-[65%]">
        <h1 className="font-medium text-lg">dtMoney</h1>
        <p className="text-sm text-blue-500/80">ReactJS, Stiches</p>

        <p className="text-gray-400">
          Aplicação desenvolvida durante o curso Ignite oferecido pela
          Rocketseat.
        </p>
        <a href="https://github.com/llemosv/03-dt-money" target="_blank">
          <Button>Vizualizar repositório</Button>
        </a>
      </div>
    </div>
  );
}
