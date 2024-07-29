export const Button = ({ children, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:border-transparent hover:text-white'}`}
    >
      {children}
    </button>
  );
};
