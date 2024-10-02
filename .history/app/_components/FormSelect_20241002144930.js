function FormSelect({ children, name, id }) {
  return (
    <select
      name={name}
      id={id}
      className="w-full rounded-sm border-[0.5px] border-primary-50 bg-white-50 p-3 text-sm text-primary-600 outline-none"
    >
      {children}
    </select>
  );
}

export default FormSelect;
