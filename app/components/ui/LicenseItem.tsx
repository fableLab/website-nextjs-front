export type LicenseItemProps = {
  title: string;
  content: string;
};

export default function LicenseItem({ title, content }: LicenseItemProps) {
  return (
    <div>
      <h4 className="font-bold text-lg text-azure-800">{title}</h4>
      <p className="text-base text-black">{content}</p>
    </div>
  );
}
