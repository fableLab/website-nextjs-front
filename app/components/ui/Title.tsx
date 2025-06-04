type TitleProps = {
    name: string,
    font?: string
};

export default function Title({ name, font = 'inherit' }: TitleProps) {
    return (
        <h1>
            {name}
        </h1>
    );
}