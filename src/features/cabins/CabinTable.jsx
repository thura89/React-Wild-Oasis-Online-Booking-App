import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useFetchCabin } from "./useFetchCabin";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const CabinTable = () => {
  const { isLoading, cabins } = useFetchCabin();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="Cabins" />;
  const filterValue = searchParams.get("discount") || "all";

  let filterCabinData;

  // # Filter
  if (filterValue === "all") {
    filterCabinData = cabins;
  }

  if (filterValue === "no-discount") {
    filterCabinData = cabins.filter((cabin) => cabin.discount === 0);
  }

  if (filterValue === "with-discount")
    filterCabinData = cabins.filter((cabin) => cabin.discount > 0);

  // # SortBy
  const sortBy = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let sortCabinsData;
  if (filterCabinData) {
    sortCabinsData = filterCabinData.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );
  }

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        // data={filterCabinData}
        data={sortCabinsData}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
  );
};

export default CabinTable;
