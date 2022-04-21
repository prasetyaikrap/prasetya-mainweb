import Link from "next/link";

export default function Navbar(props) {
  return (
    <div className="navContainer">
      <Link href="/">
        <h1 className="navTitle">Prasetya Priyadi</h1>
      </Link>
      <div className="menuBox">
        <Link href="/">
          <button className="menuChild navText">Blog</button>
        </Link>
        <Link href="/">
          <button className="menuChild navText">Showcase</button>
        </Link>
        <Link href="/">
          <button className="menuChild navText">Contact</button>
        </Link>
      </div>
    </div>
  );
}
