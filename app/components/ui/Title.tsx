export type TitleProps = {
  name: string,
  id?: number,
  font?: string
};

export default function Title({ name, id = 0, font = 'display' }: TitleProps) {
  return (
    <h2 className={`text-4xl text-azure-800 font-bold font-${font}`} id={`title-${id}`}>
      {name}
    </h2>
  );
}
