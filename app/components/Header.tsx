export const Header = (): React.ReactElement => {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Mohole chat</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
