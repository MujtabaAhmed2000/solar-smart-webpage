const Button = ({ isDisabled, onClick, children }) => {
  return (
    <button
      disabled={isDisabled}
      className="w-fit bg-primary px-4 py-2 text-white disabled:brightness-50 md:px-4 md:py-2 lg:text-2xl"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
