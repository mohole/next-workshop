import Link from "next/link";

export const Header = () => {
  return (
    <header class="navbar bg-neutral text-neutral-content">
      <div class="container mx-auto">
        <h1 className="flex-1">
          <Link href={"/"} class="btn btn-ghost normal-case text-xl">
            Moholemon
          </Link>
        </h1>
        <nav>
          <ul class="menu menu-horizontal px-1">
            <li>
              <Link href="/add" className="btn">Crea</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
