export default function Sidebar({}) {
  return (
    <>
      <nav className=" text-white flex justify-between py-6 fixed w-full px-40 font-[Archivo]">
        <div>
          <img src="" alt="logo" />
        </div>
        <ul className="flex gap-3">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a
              href="#xp"
              className="transition-colors duration-300 hover:text-green-500"
            >
              XP
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
