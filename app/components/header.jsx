import Link from "next/link";

export const Header = () => {
  return (
    <header className="navbar bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between">
        <h1>
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            Moholemon
          </Link>
        </h1>
        <Link href="/add" className="btn">+ Crea</Link>
      </div>
    </header>
  );
};
