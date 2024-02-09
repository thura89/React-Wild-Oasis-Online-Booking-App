import React from "react";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
const Stats = ({ bookings, confirmedStays, cabinCount, numDays }) => {
  //1 Bookings
  const numBookings = bookings.length;

  // 2 Sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3 Check in
  const checkIn = confirmedStays.length;

  // 4 Occupancy Rate
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (cabinCount * numDays);

  return (
    <>
      <Stat
        color="blue"
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBookings}
      />
      <Stat
        color="green"
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
      />
      <Stat
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        title="Check Ins"
        value={checkIn}
      />
      <Stat
        color="yellow"
        icon={<HiOutlineChartBar />}
        title="Occupancy Rate"
        value={Math.round(occupancy * 100) + `%`}
      />
    </>
  );
};

export default Stats;
