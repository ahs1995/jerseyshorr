function ProductDescription({ content, name, season, material, team }) {
  // Function to replace plain word placeholders
  const replacePlaceholders = (template) => {
    const replacements = { name, season, material, team };
    // Replace each word that matches a key in replacements
    return template.replace(/\b(name|season|material|team)\b/g, (match) => {
      return replacements[match] || match; // Replace or leave unchanged
    });
  };

  return (
    <div>
      <h5 className="mb-2 text-xl">product description:</h5>
      <p>{replacePlaceholders(content)}</p>
    </div>
  );
}

export default ProductDescription;
