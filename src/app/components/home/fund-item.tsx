export default function FundItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col flex-1 [&_p]:leading-[18px]">
      <p className="text-gable-green font-bold">{title}</p>
      <p className="text-gable-green-400 font-semibold uppercase">{value}</p>
    </div>
  );
}
