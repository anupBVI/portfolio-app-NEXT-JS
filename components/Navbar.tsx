import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const NavItem: FC<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      {" "}
      <span className="hover:text-green-600" onClick={() => setActiveItem(name)}>{name}</span>{" "}
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();
  // console.log(useRouter())
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
      <span className="text-xl font-bold text-green-600 border-b-4 border-green-400 md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          name="About"
          route="/"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Projects"
          route="/projects"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          route="/resume"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default Navbar;
