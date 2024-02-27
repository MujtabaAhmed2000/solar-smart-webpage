const InputTextArea = ({ placeholder, onChange, value }) => {
  return (
    <div class="relative w-full">
      <textarea
        id={placeholder}
        className="border-1 peer min-h-[100px] w-full appearance-none rounded-sm border border-primary bg-transparent px-4 pb-2.5 pt-4 text-base md:min-h-[200px] 2xl:text-xl"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={" "}
      />
      <label
        htmlFor={placeholder}
        className="absolute left-2 top-0 z-10 origin-[0] -translate-y-1/2 scale-75 transform cursor-text bg-background text-base text-gray-500 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 md:peer-placeholder-shown:top-10 md:peer-focus:top-0 2xl:text-xl"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputTextArea;
