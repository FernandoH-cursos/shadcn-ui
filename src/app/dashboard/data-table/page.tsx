import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function fetchData() {
  return payments;
}


const Page = async () => {
  const data = await fetchData();
  return (
    <div >
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Page;
