function FormLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor=""
      className="text-sm capitalize text-primary-800 xl:text-base"
    >
      {children}
    </label>
  );
}

export default FormLabel;
