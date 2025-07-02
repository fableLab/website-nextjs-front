'use client';

export default function ScrollToTop() {
  return (
    <div
      className="md:col-span-2 col-span-12 text-[#ffed38] px-8 pt-4 pb-8 cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <img src="/arrows/arrow-footer.svg" className="md:w-1/4 w-1/10 mx-auto" />
      <p className="text-center mt-3">Retour en haut</p>
    </div>
  );
}
