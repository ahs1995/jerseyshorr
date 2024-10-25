function AccountLayout({ children }) {
  return (
    <div className="mx-auto w-[90%] bg-white-50 py-8 lg:py-12 xl:w-[80%]">
      <div className="mb-6 bg-primary-50 py-2 xl:mb-10">
        <h2 className="text-center text-lg font-bold uppercase text-primary-800 xl:text-2xl">
          My account
        </h2>
      </div>
      {children}
    </div>
  );
}

export default AccountLayout;