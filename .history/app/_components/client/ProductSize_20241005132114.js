"use client";

import { useState } from "react";

function ProductSize({ size, setSelectedSize }) {
  const [selected, setSelected] = useState(null);

  function handleSelected(s) {
    setSelected(s);
    setSelectedSize(s);
  }

  return (
    <div className="mb-8">
      <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
        size: {selected && `${selected}`}
      </h5>
      {/* generate dynamically */}
      <ul className="flex gap-2">
        {size.map((s, index) => (
          <li
            className={`cursor-pointer border-[0.5px] border-primary-200 px-4 py-2 text-sm ${selected === s && `bg-primary-900`}`}
            key={index}
            onClick={() => handleSelected(s)}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSize;
