function FormLabel({ children, htmlFor, mandatory }) {
  return (
    <label htmlFor="" className="text-sm capitalize text-primary-800">
      {!mandatory ? { children } : `${children} ${(<span>*</span>)}`}
    </label>
  );
}

export default FormLabel;
