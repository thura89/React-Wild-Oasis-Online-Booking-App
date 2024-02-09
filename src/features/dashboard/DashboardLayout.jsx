import styled from "styled-components";
import useRecentBooking from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import useRecentStay from "./useRecentStay";
import Stats from "./Stats";
import { useFetchCabin } from "../cabins/useFetchCabin";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading: isLoading1, numDays } = useRecentBooking();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStay();
  const { cabins, isLoading: isLoading3 } = useFetchCabin();
  const cabinCount = cabins?.length;
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        stays={stays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <div>Today's Activity</div>
      <div>Chart Stay Duration</div>
      <div>Charts Sale</div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
