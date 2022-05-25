import { Link } from 'preact-router/match';
import { h } from 'preact';

import BrandLogo from '../BrandLogo';
import NavbarMenu from '../NavbarMenu';
import SearchBox from '../SearchBox';

const Navbar = () => (
  <div className="flex gap-5 justify-between items-center p-4 mt-3 md:gap-10">
    <Link href="/" className="inline-block">
      <BrandLogo />
    </Link>
    <div className="grow">
      <SearchBox />
    </div>
    <div>
      <NavbarMenu />
    </div>
  </div>
);

export default Navbar;
