
interface NavBarProp {
  navbarCount: number;
}

const NavBar = ({ navbarCount }: NavBarProp) => {
  return <div>Navbar : {navbarCount}</div>;
};

export default NavBar;
