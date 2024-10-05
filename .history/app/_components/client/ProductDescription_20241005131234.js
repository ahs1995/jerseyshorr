function ProductDescription({ content, name, season, material, team }) {
  // Function to replace plain word placeholders
  const replacePlaceholders = (template) => {
    return template.replace(/{(.*?)}/g, (match, key) => {
      const replacements = { name, season, material, team };
      return replacements[key] || match; // If key not found, keep the placeholder
    });
  };

  return (
    <div>
      <h5 className="mb-2 text-xl capitalize text-primary-800">
        product description:
      </h5>
      <p className="text-sm text-primary-700">{replacePlaceholders(content)}</p>
    </div>
  );
}

export default ProductDescription;
