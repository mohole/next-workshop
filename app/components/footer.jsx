export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-6 bg-base-300 text-base-content">
      <p>Copyright ©️ Mohole {year}</p>
    </footer>
  );
};