import { BsCurrencyBitcoin, BsNewspaper } from 'react-icons/bs';
import { Link } from 'preact-router/match';
import { h } from 'preact';

const NavbarMenu = () => (
  <ul className="flex gap-5">
    <li>
      <Link href="/" className="navbar-menu-item">
        <BsCurrencyBitcoin size={24} />
      </Link>
    </li>
    <li>
      <Link href="/" className="navbar-menu-item">
        <BsNewspaper size={24} />
      </Link>
    </li>
  </ul>
);

export default NavbarMenu
