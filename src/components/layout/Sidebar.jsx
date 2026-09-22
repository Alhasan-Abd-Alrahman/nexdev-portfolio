import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
  },
  {
    id: 4,
    name: "Services",
    path: "/services",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const getNavLinkClass = ({ isActive }) => {
  return isActive
    ? "text-[#168BFF]"
    : "text-white hover:text-[#168BFF]";
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-[60] rounded-md bg-[#030A16] px-3 py-2 text-xl text-white md:hidden"
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[267px]
          bg-[#030A16] text-white
          transition-transform duration-300
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">

          {/* Mobile Close Button */}
          <div className="flex justify-end px-5 pt-5 md:hidden">
            <button
              type="button"
              onClick={closeSidebar}
              className="text-2xl text-white hover:text-[#168BFF]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Team Name */}
          <div className="pt-16 text-center">
            <h1 className="text-2xl font-light tracking-wide">
              NEXDEV
            </h1>
          </div>

          {/* Navigation */}
          <nav className="mt-20">
            <ul className="flex flex-col items-center gap-7">
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={closeSidebar}
                    className={getNavLinkClass}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </aside>
    </>
  );
}
