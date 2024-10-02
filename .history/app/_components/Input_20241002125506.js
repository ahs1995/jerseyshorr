function Input({ type, id }) {
  return (
    <input
      type={type}
      id={id}
      className="rounded-sm border-[0.5px] border-primary-50 bg-white-50 p-1 outline-none"
    />
  );
}

export default Input;
