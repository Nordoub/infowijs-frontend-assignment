const Footer = () => {
  return (
    <footer className="inset-shadow-sm mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025. Technical project.
          </span>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500">
            <li className="hover:underline me-4 md:me-6 ">About</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
