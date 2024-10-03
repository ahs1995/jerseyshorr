function FormSelect({ children, name, id }) {
  return (
    <select
      name={name}
      id={id}
      className="w-full rounded-sm bg-white-50 p-2 text-sm text-primary-600 outline-none"
    >
      {children}
    </select>
  );
}

export default FormSelect;
