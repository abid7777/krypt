import { h } from 'preact';

const GlobalCurrencyStatsCard = ({ heading = '', value = 0 }) => (
  <div className="group py-12 px-4 rounded-md border shadow-lg">
    <h4>{heading}</h4>
    <p className="mt-4 text-3xl">{value}</p>
  </div>
);

export default GlobalCurrencyStatsCard;
