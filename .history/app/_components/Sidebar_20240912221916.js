import { XMarkIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="bg-#fff relative p-8 text-primary-900">
      <XMarkIcon className="mb-12 h-6 w-6" />
      <ul className="flex flex-col gap-10 text-lg">
        <li>category 1</li>
        <li>category 2</li>
        <li>category 3</li>
        <li>category 4</li>
        <li>category 5</li>
        <li>category 6</li>
        <li>category 7</li>
        <li>category 8</li>
        <li>category 9</li>
        <li>category 10</li>
      </ul>
    </div>
  );
}

export default Sidebar;
