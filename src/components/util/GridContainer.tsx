export default function GridContainer({ title, description, children }) {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-6">
      <div className="relative h-[calc(100%-.5rem)] w-full">
        <div className="md:sticky md:top-36 text-center md:text-left mb-8 lg:mb-0">
          <h2 className="font-semibold text-3xl">{title}</h2>
          <p className="mt-4 leading-7 text-gray-600 text-balance">
            {description}
          </p>
        </div>
      </div>
      <div className="col-span-2 grid lg:grid-cols-2 gap-8">{children}</div>
    </div>
  );
}
