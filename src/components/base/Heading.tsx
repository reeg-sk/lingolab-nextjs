export default function Heading({ children }) {
  return (
    <div className="mt-6">
      <h1 className="text-3xl mb-8 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
        {children}
      </h1>
    </div>
  );
}
