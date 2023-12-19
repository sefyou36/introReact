const NavBar = () => {
    return (
        <nav className="flex justify-start bg-black p-3.5 w-full">
        <ul className="flex text-white gap-52">
          <li>Acceuil</li>
          <li>A propos</li>
          <li>Nos Offres</li>
          <li>Nos References</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
}

export default NavBar
// style={{ display: "flex", color: "rgba(255, 255, 255, 0.87)", gap: 200 }}