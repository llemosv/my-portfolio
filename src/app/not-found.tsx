import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center lg:flex-row h-screen bg-stars">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-9xl font-sans">Oops!</h1>
        <p className="text-gray-300 text-2xl">
          A página que você está procurando não existe!
        </p>
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-all text-lg"
        >
          Voltar para a página inicial
        </Link>
      </div>
      <div className="w-full hidden lg:flex items-center justify-center">
        <Image
          width={560}
          height={560}
          src="/images/404.svg"
          alt="404 error image"
        />
      </div>
    </main>
  );
}
