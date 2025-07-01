export type SubTitleProps = {
  name: string,
  id?: number,
  font?: string
};

export default function SubTitle({ name, id = 0, font = 'display' }: SubTitleProps) {
  return (
    <h3 className={`text-3xl text-azure-800 font-extrabold font-${font}`} id={`sub-title-${id}`}>
      {name}
    </h3>
  );
}
