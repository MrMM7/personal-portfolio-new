export default function Navbar() {
    const className = "hover:text-neutral-600 transition duration-200"
  return (
    <nav className="nav-items flex gap-8 mt-5 fixed backdrop-blur-sm px-4 py-2 rounded-2xl z-999">
        <a href="#whoami" className={className}>
            Who am I
        </a>
        <a href="#myworks" className={className}>
            My Works
        </a>
        <a href="#skills" className={className}>
            Skills
        </a>
        <a href="#availablity" className={className}>
            Availability
        </a>
    </nav>
  );
}
