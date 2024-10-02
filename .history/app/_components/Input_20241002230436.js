function Input({ type, id, placeholder }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full rounded-sm border-[0.5px] border-primary-50 bg-white-50 p-2 text-sm text-primary-600 outline-none"
    />
  );
}

export default Input;
