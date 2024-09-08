export default function FloatingTextarea({ label, name, ...props }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        id={name}
        className="peer p-8 block w-full border border-gray-300 bg-slate-100 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  focus:pt-10 focus:pb-6 [&:not(:placeholder-shown)]:pt-10 [&:not(:placeholder-shown)]:pb-6 autofill:pt-6 autofill:pb-2"
        placeholder="Vaša správa"
        rows={7}
        {...props}
        required
      />
      <label
        htmlFor={name}
        className="absolute top-0 start-0 p-8 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {label}
      </label>
    </div>
  );
}
