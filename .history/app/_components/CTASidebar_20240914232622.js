function CTASidebar() {
  return (
    <div className="mt-[19rem] flex flex-col items-center gap-4">
      <button className="block w-[80%] rounded-md bg-accent-500 py-2 text-lg capitalize text-accent-50 shadow-md hover:bg-accent-600">
        shop now
      </button>
      <span className="text-xs capitalize text-primary-500">
        contact
        <Link href="#" className="underline">
          {" "}
          us
        </Link>
      </span>
      {/* social media links */}
      <div className="mt-2 flex">
        <span className="cursor-pointer border-[1px] border-r-0 border-primary-100 px-4 py-1 outline-none">
          <Image
            src="/icons/fb-icon.png"
            alt="facebook icon"
            width={12}
            height={12}
          />
        </span>
        <span className="cursor-pointer border-[1px] border-primary-100 px-4 py-1 outline-none">
          <Image src="/icons/x-icon.png" alt="x icon" width={12} height={12} />
        </span>
        <span className="cursor-pointer border-[1px] border-l-0 border-primary-100 px-4 py-1 outline-none">
          <Image
            src="/icons/insta-icon.png"
            alt="insta icon"
            width={12}
            height={12}
          />
        </span>
      </div>
    </div>
  );
}

export default CTASidebar;
