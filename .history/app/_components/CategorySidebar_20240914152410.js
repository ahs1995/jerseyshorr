import Link from "next/link";

function CategorySidebar() {
  return (
    <aside>
      <div>
        <ul>
          <li>
            <Link href="#">category1</Link>
          </li>
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
