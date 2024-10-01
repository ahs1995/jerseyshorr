import { ChevronDownIcon, TagIcon } from "@heroicons/react/24/solid";

function Coupons() {
  return (
    <div className="relative">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <TagIcon className="h-5 w-5" />
          <h3 className="text-md font-semibold uppercase">coupons & offers</h3>
        </div>
        <span>
          <ChevronDownIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

export default Coupons;
