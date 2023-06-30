type TechCardProps = {
  name: string;
};

export function TechCard({ name }: TechCardProps) {
  return (
    <div className="rounded-lg bg-blue-900/70 px-2 py-1">
      <p className="text-sm text-blue-400">{name}</p>
    </div>
  );
}
