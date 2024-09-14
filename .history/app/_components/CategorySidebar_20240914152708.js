import Link from "next/link";

function CategorySidebar() {
  return (
    <aside
      className={`absolute left-0 top-0 z-[100000] h-full w-[80vw] bg-[#fff] shadow-md duration-300 ease-in-out`}
    >
      <div className="relative py-6 text-primary-900">
        <ul className="my-10 flex flex-col gap-4 font-bold uppercase text-primary-800">
          <li>
            <Link href="#">category1</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category2</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category3</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category4</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category5</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category6</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category7</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category8</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
        </ul>
      </div>
    </aside>
  );
}

export default CategorySidebar;
