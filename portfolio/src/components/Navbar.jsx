import { DivNav, A } from "../styled-components/Navbar";

export default function Navbar() {
  return (
    <DivNav>
      <div>
        <img src="https://via.placeholder.com/200x100" alt="logo" />
      </div>
      <div>
        <A href="#">Projets</A>
        <A href="#">Skills</A>
        <A href="#">Me contacter</A>
      </div>
    </DivNav>
  );
}
