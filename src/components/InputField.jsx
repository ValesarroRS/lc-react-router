const inputClassName =
  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
export const InputField = ({ label, inputType, ...props }) => {
  const InputComponent = inputType === 'textarea' ? 'textarea' : 'input';
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {label}
      </label>
      <InputComponent {...props} className={inputClassName} />
    </div>
  );
};
