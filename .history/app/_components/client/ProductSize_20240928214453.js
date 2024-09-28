import { useState } from "react";

function ProductSize({ size }) {
  const [selected, setSelected] = useState(null);

  function handleSelected(e) {
    const size = e.target.name;
    setSelected(size);
  }

  return (
    <div className="mb-8">
      <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
        size:
      </h5>
      {/* generate dynamically */}
      <ul className="flex gap-2">
        {size.map((s, index) => (
          <li
            className="cursor-pointer border-[0.5px] border-primary-200 px-4 py-2 text-sm"
            key={index}
            onClick={handleSelected}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSize;
