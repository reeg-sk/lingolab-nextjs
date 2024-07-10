export default function Newsletter() {
  return (
    <div className="max-w-xl lg:max-w-lg">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Odoberaj náš newsletter
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-300">
        Prihláste sa na odber newslettera a získavajte najnovšie informácie
        akciách a zľavy priamo v emailovej schránke.
      </p>
      <div className="mt-6 flex flex-col md:flex-row max-w-md gap-x-4 gap-y-2">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full md:w-fit min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
          placeholder="Váš email"
        />
        <button
          type="submit"
          className="w-full md:w-fit flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600"
        >
          Odoberať
        </button>
      </div>
    </div>
  );
}
