function FormLabel({ children, htmlFor }) {
  return (
    <label htmlFor="" className="text-sm capitalize text-primary-700">
      {children}
    </label>
  );
}

export default FormLabel;
