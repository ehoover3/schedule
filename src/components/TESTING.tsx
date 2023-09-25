import { useEffect, useState } from "react";
import getMonthLength_Month1 from "../utils/get/getMonthLength_Month1";
import getWeekdayDay1_Month1 from "../utils/get/getWeekdayDay1_Month1";

function TESTING({ formData, variables }: any) {
  let local_today = new Date(formData.today);
  let year: any = local_today.getFullYear();
  let month = local_today.getMonth() + 1;
  let date = local_today.getDate();

  const [monthLength_Month1, setMonthLength_Month1] = useState<number>();
  const [weekdayDay1_Month1, setWeekdayDay1_Month1] = useState<any>();

  useEffect(() => {
    year = local_today.getFullYear();
    month = local_today.getMonth() + 1;

    async function fetchData() {
      const monthLength1 = await getMonthLength_Month1(year, month);
      setMonthLength_Month1(monthLength1);

      const weekdayDay1 = await getWeekdayDay1_Month1(year, month);
      setWeekdayDay1_Month1(weekdayDay1);
    }
    fetchData();
    //
  }, [formData.today]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <span style={{ fontWeight: "bold" }}>getMonthLength_Month1 </span>
        <span>--- {weekdayDay1_Month1}</span>
      </div>

      <div>
        <span style={{ fontWeight: "bold" }}>getMonthLength_Month1 </span>
        <span>--- {monthLength_Month1}</span>
      </div>
    </div>
  );
}

export default TESTING;
