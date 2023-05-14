import Link from "next/link";

export const Header = () => {
  return (
    <header className="navbar bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <h1 className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            Moholemon
          </Link>
        </h1>
        <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/add" className="btn">Crea</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
