import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Homepage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
      <div className="rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <AppPieChart />
      <CardList title="Popular Content" />
      <TodoList/>
      <div className="lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <CardList title="Latest Transactions" />
    </div>
  );
}
