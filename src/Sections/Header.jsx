export default function Header() {
  return (
    <nav className=" flex h-[70px] w-full items-center p-6 shadow-lg" aria-label="main-navbar">
      <div className="max-container flex w-full items-center justify-start sm:px-4 md:px-0">
        <img
          src="/images/airbnb-logo.png"
          alt="Logo"
          className=" w-16 sm:w-24 "
        ></img>
      </div>
    </nav>
  );
}
