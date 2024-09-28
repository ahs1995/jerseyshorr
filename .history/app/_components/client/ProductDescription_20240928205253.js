function ProductDescription({ content, name }) {
  return (
    <div>
      <h5 className="mb-2 text-xl">product description:</h5>
      <p>{description.find("name", `${name}`)}</p>
    </div>
  );
}

export default ProductDescription;
