const InputTextField = ({ placeholder, onChange, value }) => {
  return (
    <div class="relative w-full">
      <input
        type={"text"}
        id={placeholder}
        className="border-1 peer h-12 w-full appearance-none rounded-sm border border-primary bg-transparent px-4 pb-2.5 pt-4 text-base 2xl:h-16 2xl:text-xl"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={" "}
      />
      <label
        htmlFor={placeholder}
        className="absolute left-2 top-0 z-10 origin-[0] -translate-y-1/2 scale-75 transform cursor-text bg-background text-base text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 2xl:text-xl"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputTextField;
