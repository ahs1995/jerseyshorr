function FormLabel({ children, htmlFor }) {
  return (
    <label htmlFor="" className="text-sm capitalize text-primary-800">
      {children}
    </label>
  );
}

export default FormLabel;
