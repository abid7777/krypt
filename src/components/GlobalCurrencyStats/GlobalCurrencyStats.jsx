import { h } from 'preact';
import GlobalCurrencyStatsCard from '../GlobalCurrencyStatsCard';

const GlobalCurrencyStats = () => (
  <div className="select-none">
    <h3 className="text-2xl md:text-3xl lg:text-4xl">Global Currency Stats</h3>
    <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <GlobalCurrencyStatsCard />
      <GlobalCurrencyStatsCard />
      <GlobalCurrencyStatsCard />
      <GlobalCurrencyStatsCard />
      <GlobalCurrencyStatsCard />
      <GlobalCurrencyStatsCard />
    </div>
  </div>
);

export default GlobalCurrencyStats;
