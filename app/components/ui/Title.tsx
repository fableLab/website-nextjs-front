export type TitleProps = {
  name: string,
  font?: string
};

export default function Title({ name, font = 'display' }: TitleProps) {
  return (
    <h2 className={`text-4xl text-azure-800 font-bold my-13 font-${font}`}>
      {name}
    </h2>
  );
}
