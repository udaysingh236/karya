function Input({ type, name, id, placeholder, value, onChange }) {
  return (
    <input
      className="w-full rounded-lg bg-white p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
