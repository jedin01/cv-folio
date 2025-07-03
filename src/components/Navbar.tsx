export default function Sidebar({}) {
  return (
    <>
      <nav className="bg-gray-800 text-white flex justify-between py-6 fixed w-full px-40">
        <div>
          <img src="" alt="logo" />
        </div>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About</li>
          <li>XP</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
