import { Component } from '@angular/core';
import { Sidebar } from '../../molecules/sidebar/sidebar.component';
import { Tile } from '../../molecules/tile/tile.component';
import { Typography } from '../../atoms/typography/typography.component';
import { Icon } from '../../atoms/icon/icon.component';

type Stat = {
  value: number | string;
  name: string;
  icon: string;
  relative: number;
}

const statistics: Stat[] = [
  {
    value: '$' + (10540).toLocaleString(),
    name: 'Total Revenue',
    icon: 'fa fa-dollar',
    relative: 22.45
  },
  {
    value: (1056).toLocaleString(),
    name: 'Orders',
    icon: 'fa fa-shopping-cart',
    relative: 15.34
  },
  {
    value: 48,
    name: 'Active Sessions',
    icon: 'fa fa-person',
    relative: -18.25
  },
  {
    value: (5420).toLocaleString(),
    name: 'Total Sessions',
    icon: 'fa fa-people',
    relative: -10.24
  }
];

function processStatistics(statistics: Stat[]) {
  return statistics.map((stat) => {
    return {
      ...stat,
      relative: {
        value: Math.abs(stat.relative),
        positive: stat.relative >= 0
      }
    };
  });
}

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [Sidebar, Tile, Typography, Icon],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardPage {
  statistics = processStatistics(statistics);
}