import { Link } from 'preact-router/match';
import { h } from 'preact';

import BrandLogo from '../BrandLogo';
import NavbarMenu from '../NavbarMenu';

const Navbar = () => (
  <div className="container flex gap-5 justify-between items-center py-4 px-2 mx-auto">
    <Link href="/" className="inline-block">
      <BrandLogo />
    </Link>
    <div>
      <NavbarMenu />
    </div>
  </div>
);

export default Navbar;
