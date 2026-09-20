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
  // {
  //   id: 3,
  //   name: "Projects",
  //   path: "/projects",
  // },
  {
    id: 4,
    name: "Services",
    path: "/services",
  },
  // {
  //   id: 5,
  //   name: "Team",
  //   path: "/team",
  // },
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
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[267px] shrink-0 bg-[#030A16] text-white">
      <div className="flex h-full flex-col">

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
  );
}