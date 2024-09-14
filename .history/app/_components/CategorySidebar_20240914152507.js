import Link from "next/link";

function CategorySidebar() {
  return (
    <aside
      className={`absolute left-0 top-0 z-[100000] h-full w-[80vw] bg-[#fff] shadow-md duration-300 ease-in-out`}
    >
      <div>
        <ul>
          <li>
            <Link href="#">category1</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category2</Link>
          </li>
          <li>
            <Link href="#">category3</Link>
          </li>
          <li>
            <Link href="#">category4</Link>
          </li>
          <li>
            <Link href="#">category5</Link>
          </li>
          <li>
            <Link href="#">category6</Link>
          </li>
          <li>
            <Link href="#">category7</Link>
          </li>
          <li>
            <Link href="#">category8</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default CategorySidebar;
