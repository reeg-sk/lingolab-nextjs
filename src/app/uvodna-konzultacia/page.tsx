import StyleIndex from "@/components/graphics/StyleIndex";

export default function Reservation() {
  return (
    <div className="px-4">
      <StyleIndex />
      <section
        id="ponuka"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="mt-12">
          <h1 className="text-center text-3xl mb-8 font-extrabold sm:text-4xl sm:leading-[3.5rem] text-balance">
            Úvodná konzultácia <span className="text-primary">zdarma</span> pre nových študentov  
          </h1>
        </div>
      </section>
    </div>
  );
}
