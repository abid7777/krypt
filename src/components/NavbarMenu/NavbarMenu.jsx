import { BsCurrencyBitcoin, BsNewspaper, BsSearch } from 'react-icons/bs';
import { Link } from 'preact-router/match';
import { h } from 'preact';

const NavbarMenu = () => (
  <ul className="flex gap-5">
    <li>
      <button type="button" className="group navbar-menu-item">
        <BsSearch size={14} className="transition-transform group-hover:scale-150" />
      </button>
    </li>
    <li>
      <Link href="/" className="group navbar-menu-item">
        <BsCurrencyBitcoin size={14} className="transition-transform group-hover:scale-150" />
      </Link>
    </li>
    <li>
      <Link href="/" className="group navbar-menu-item">
        <BsNewspaper size={14} className="transition-transform group-hover:scale-150" />
      </Link>
    </li>
  </ul>
);

export default NavbarMenu
