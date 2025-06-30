import NavSearch from "./nav-search";
import NavLinks from "./nav-links";

export default function NavBar() {
  console.log("NAVBAR RENDERED");
  return (
    <>
      <NavSearch />
      <NavLinks />
    </>
  );
}
