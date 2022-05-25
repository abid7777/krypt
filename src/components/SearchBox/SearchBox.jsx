import { h } from 'preact';
import cx from 'classnames';
import _noop from 'lodash';

const SearchBox = ({ className = '', value = '', onChange = _noop }) => (
  <div className="relative text-base">
    <input
      type="text"
      placeholder="Search Currencies"
      className={cx('search-box peer', className)}
      value={value}
      onInput={onChange}
    />
    <label
      htmlFor="search currencies"
      className="search-box-label"
    >
      Search Currencies
    </label>
    <div
      className="absolute bottom-[0.1px] w-full h-[1px] bg-gray-800 transition-transform scale-0 peer-focus:scale-100"
    />
  </div>
);

export default SearchBox;
