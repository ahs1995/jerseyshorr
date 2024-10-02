function FormLabel({ children, htmlFor }) {
  return (
    <label htmlFor="" className="text-sm capitalize">
      {children}
    </label>
  );
}

export default FormLabel;
