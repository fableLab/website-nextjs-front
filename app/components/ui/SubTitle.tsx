type SubTitleProps = {
    name: string,
    font?: string
};

export default function SubTitle({ name, font = 'inherit' }: SubTitleProps) {
    return (
        <h3>
            {name}
        </h3>
    );
}