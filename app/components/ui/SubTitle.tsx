type SubTitleProps = {
  name: string,
  font?: string
};

export default function SubTitle({ name, font = 'display' }: SubTitleProps) {
  return (
    <h3 className={`text-3xl text-azure-800 font-extrabold mb-6 font-${font}`}>
      {name}
    </h3>
  );
}
