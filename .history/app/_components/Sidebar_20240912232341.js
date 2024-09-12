import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="relative p-6 text-primary-900">
      <div className="absolute right-1">
        <XMarkIcon className="h-6 w-6" />
      </div>
      <ul className="mt-10 flex flex-col gap-10 uppercase">
        <li>
          <Link href="#">home</Link>
        </li>
        <li>
          <span>shop</span>
        </li>
        <li>
          <Link href="#">track your order</Link>
        </li>
        <li>
          <Link href="#">faq</Link>
        </li>
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
