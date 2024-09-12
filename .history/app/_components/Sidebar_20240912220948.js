import { XMarkIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="relative bg-primary-50 px-4 py-8 text-primary-900">
      <XMarkIcon className="h-4 w-4" />
      <ul className="flex flex-col gap-8">
        <li>category 1</li>
        <li>category 2</li>
        <li>category 3</li>
        <li>category 4</li>
        <li>category 5</li>
        <li>category 6</li>
        <li>category 7</li>
        <li>category 8</li>
      </ul>
    </div>
  );
}

export default Sidebar;
