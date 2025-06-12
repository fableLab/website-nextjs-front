import LicenseItem, { LicenseItemProps } from './LicenseItem';

export type LicenseProps = {
  description: string;
  licenseItems: LicenseItemProps[];
};


export default function License({ description, licenseItems }: LicenseProps) {
  return (
    <section className="py-8 space-y-6 text-black">
      <h2 className='text-4xl text-azure-800 font-extrabold'>Licence libre.</h2>
      <p className="text-base">{description}</p>
      <div className='space-y-5'>
        {licenseItems.map((item, index) => (
          <LicenseItem key={index} {...item} />
        ))}
      </div>
      <p className='text-base text-black'>Cette ressource est partagée librement avec la licence CC BY-SA 4.0.</p>
      <div className="space-y-1">
        <p><a href='#' className='underline text-base text-black hover:text-blue-700'>Retrouvez toutes les modalités de partage de la ressource sur notre page dédiée.</a></p>
        <p><a href='#' className='underline text-base text-black hover:text-blue-700'>Écrivez-nous vos questions et retours via notre formulaire de contact.</a></p>
      </div>

    </section>
  );
}
