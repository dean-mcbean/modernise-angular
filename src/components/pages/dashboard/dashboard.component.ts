import { Component } from '@angular/core';
import { Sidebar } from '../../molecules/sidebar/sidebar.component';
import { Tile } from '../../molecules/tile/tile.component';
import { Typography } from '../../atoms/typography/typography.component';
import { Icon } from '../../atoms/icon/icon.component';
import { Dropdown } from '../../atoms/dropdown/dropdown.component';
import { LineGraph } from '../../molecules/lineGraph/lineGraph.component';
import { Statistic } from '../../atoms/statistic/statistic.component';
import { Histogram } from '../../molecules/histogram/histogram.component';
import { Table, TableColumn, TableDataRow } from '../../molecules/table/table.component';

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
    icon: 'finance/Dollar',
    relative: 22.45
  },
  {
    value: (1056).toLocaleString(),
    name: 'Orders',
    icon: 'finance/Cart',
    relative: 15.34
  },
  {
    value: 48,
    name: 'Active Sessions',
    icon: 'common/User',
    relative: -18.25
  },
  {
    value: (5420).toLocaleString(),
    name: 'Total Sessions',
    icon: 'common/Users',
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

const orders = [
  { date: "May 21", value: 540, color: "grey" },
  { date: "May 22", value: 645, color: "primary" }
];

const sales = [
  { name: "Items Sold", value: (1259).toLocaleString()},
  { name: "Revenue", value: "$" + (12546).toLocaleString()}
];
const salesGraph = [
  { x: "12", y: 1340 },
  { x: "13", y: 1860 },
  { x: "14", y: 1625 },
  { x: "15", y: 2525 },
  { x: "16", y: 1840 },
  { x: "17", y: 2120 },
  { x: "18", y: 1920 }
];

const transactions_columns: TableColumn[] = [
  { label: "Name", type: "text" },
  { label: "Date", type: "text" },
  { label: "Amount", type: "text" },
  { label: "Status", type: "status" }
]
const transactions: TableDataRow[] = [
  ["Jessica S.", "24.05.2020", "$124.97", "Paid"],
  ["Michael J.", "23.05.2020", "$43.99", "Pending"],
  ["John D.", "22.05.2020", "$84.99", "Paid"],
  ["Jane D.", "22.05.2020", "$154.99", "Pending"],
  ["David W.", "21.05.2020", "$32.50", "Paid"]
]

const products_columns: TableColumn[] = [
  { label: "Name", type: "thumbnail-text" },
  { label: "Price", type: "text" },
  { label: "Units Sold", type: "text" },
]
const products: TableDataRow[] = [
  [{value: 'Men Grey Hoodie', href: 'https://via.placeholder.com/50x50'}, "$124.97", "645"],
  [{value: 'Women Striped T-Shirt', href: 'https://via.placeholder.com/50x50'}, "$43.99", "540"],
  [{value: 'Women White T-Shirt', href: 'https://via.placeholder.com/50x50'}, "$84.99", "540"],
  [{value: 'Men White T-Shirt', href: 'https://via.placeholder.com/50x50'}, "$154.99", "540"],
  [{value: 'Women Red T-Shirt', href: 'https://via.placeholder.com/50x50'}, "$32.50", "540"]
]

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [Sidebar, Tile, Typography, Icon, Dropdown, LineGraph, Statistic, Histogram, Table],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardPage {
  statistics = processStatistics(statistics);
  orders = orders;
  sales = sales;
  transactions_columns = transactions_columns;
  transactions = transactions;
  products_columns = products_columns;
  products = products;
  salesGraph = salesGraph;
}