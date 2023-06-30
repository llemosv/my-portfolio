'use client';
import { HiArrowRight } from 'react-icons/hi';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from 'react-icons/tb';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/llemosv',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/leonardo-lemos-673122210/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://github.com/llemosv',
    icon: <TbBrandWhatsapp />,
  },
];

export function HeroSection() {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <section className="w-full lg:h-[785px] bg-stars bg-center flex flex-col justify-center pb-10 sm:pb-32 py-32  2xl:pb-1">
      {/* Blur */}
      <div className="absolute top-1/2 mr-auto transform -translate-y-1/2 -translate-x-1/2 h-[288px] w-[600px] rounded-full bg-blue-300 opacity-20 blur-full" />

      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <motion.p
            className="font-mono text-blue-400"
            {...animProps}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
          >
            Seja bem-vindo(a)! Meu nome é
          </motion.p>
          <motion.h2
            className="text-5xl font-semibold mt-2 leading-[3rem]"
            {...animProps}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
          >
            Leonardo Lemos
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed"
            {...animProps}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
          >
            Sou Desenvolvedor Full-Stack com uma paixão especial pelo Front-End.
            As techs que mais curto utilizar são React, Next.js, Tailwind CSS e
            Styled Components.
          </motion.p>
          <motion.p
            className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed"
            {...animProps}
            transition={{ duration: 0.5, delay: 4 * 0.1 }}
          >
            Iniciei minha carreira como desenvolvedor em Agosto de 2021 como
            estagiário e, após um ano, tive a oportunidade de ser efetivado.
            Também estou cursando o 5º período de Sistemas de Informação!
          </motion.p>
          <motion.p
            className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed"
            {...animProps}
            transition={{ duration: 0.5, delay: 5 * 0.1 }}
          >
            Meu objetivo como profissional é buscar desenvolver aplicações
            atraentes, performáticas e funcionais para o usuário final. Sempre
            busco me manter atualizado sobre o mercado para sempre utilizar as
            melhores práticas e técnicas! 🚀
          </motion.p>

          <motion.button
            className="button-hover relative flex mt-6 lg:mt-10 items-center gap-3 border py-3 px-4 bg-transparent border-solid border-blue-500 text-blue-500 font-bold  hover:text-gray-50 transition duration-200"
            {...animProps}
            transition={{ duration: 0.5, delay: 5 * 0.1 }}
          >
            <span className="flex items-center gap-3 z-10">
              Entre em contato
              <HiArrowRight size={18} />
            </span>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.4, delay: 1 * 0.1 }}
          className="bg-me relative bg-[50%] bg-no-repeat bg-cover border-2 border-gray-200/50 rounded-full h-[27rem] w-[22rem] animate-wave-animation transition-all duration-1000 ease-in-out"
        />
      </div>
    </section>
  );
}