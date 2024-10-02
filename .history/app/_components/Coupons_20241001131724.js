import { TagIcon } from "@heroicons/react/24/solid";

function Coupons() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <TagIcon className="h-5 w-5" />
        <h3 className="text-md font-semibold uppercase">coupons & offers</h3>
      </div>
    </div>
  );
}

export default Coupons;