export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="font-mono p-4 text-sm text-center text-blue-400/50 min-w-full">
      <p> Copyright © Leonardo Lemos · {year}</p>
    </footer>
  );
}
