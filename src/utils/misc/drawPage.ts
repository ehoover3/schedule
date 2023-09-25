import drawCellOutline from "../draw/drawCellOutline";
import drawCellText from "../draw/drawCellText";
import drawMonthYear from "../draw/drawMonthYear";
import drawCellNumbers from "../draw/drawCellNumbers";
import getBaseVariables from "../get/getBaseVariables";
import drawWeekdays from "../draw/drawWeekdays";
import drawCellDose from "../draw/drawCellDose";
import drawCellLabTest from "../draw/drawCellLabTest";
import getCreatedDate from "../get/getCreatedDate";
import getMonth2_CellOutlines from "../get/getMonth2_CellOutlines";

const drawPage = async (page: any, variables: any, residualRenalFunction: any, createdBy: string) => {
  const v = getBaseVariables();
  let month2_cellOutlines: any = await getMonth2_CellOutlines(variables.month1Day1Weekday, variables.today_day, variables.month1DaysCount);

  let month1yModifier = 0;
  if (month2_cellOutlines === "0") month1yModifier = -100;

  // top right section
  drawCellText(page, 545, 30, `Created by ${createdBy}`);
  drawCellText(page, 545, 18, getCreatedDate());

  // Month 1
  drawMonthYear(page, `${variables.month1Name} ${variables.month1YearNumber}`, v.weekday_month1_y + month1yModifier + 17);

  drawCellOutline(page, v.x1, v.weekday_month1_y + month1yModifier, v.width, 14);
  drawCellOutline(page, v.x2, v.weekday_month1_y + month1yModifier, v.width, 14);
  drawCellOutline(page, v.x3, v.weekday_month1_y + month1yModifier, v.width, 14);
  drawCellOutline(page, v.x4, v.weekday_month1_y + month1yModifier, v.width, 14);
  drawCellOutline(page, v.x5, v.weekday_month1_y + month1yModifier, v.width, 14);
  drawCellOutline(page, v.x6, v.weekday_month1_y + month1yModifier, v.width, 14);
  drawCellOutline(page, v.x7, v.weekday_month1_y + month1yModifier, v.width, 14);

  drawWeekdays(page, v.x1 + 26, v.weekday_month1_y + month1yModifier + 3, "SUNDAY");
  drawWeekdays(page, v.x2 + 25, v.weekday_month1_y + month1yModifier + 3, "MONDAY");
  drawWeekdays(page, v.x3 + 22, v.weekday_month1_y + month1yModifier + 3, "TUESDAY");
  drawWeekdays(page, v.x4 + 12, v.weekday_month1_y + month1yModifier + 3, "WEDNESDAY");
  drawWeekdays(page, v.x5 + 17, v.weekday_month1_y + month1yModifier + 3, "THURSDAY");
  drawWeekdays(page, v.x6 + 28, v.weekday_month1_y + month1yModifier + 3, "FRIDAY");
  drawWeekdays(page, v.x7 + 16, v.weekday_month1_y + month1yModifier + 3, "SATURDAY");

  // month 1 - line 1
  drawCellOutline(page, v.x1, v.y1 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x2, v.y1 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x3, v.y1 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x4, v.y1 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x5, v.y1 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x6, v.y1 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x7, v.y1 + month1yModifier, v.width, v.height);

  // month 1 - line 2
  drawCellOutline(page, v.x1, v.y2 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x2, v.y2 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x3, v.y2 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x4, v.y2 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x5, v.y2 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x6, v.y2 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x7, v.y2 + month1yModifier, v.width, v.height);

  // month 1 - line 3
  drawCellOutline(page, v.x1, v.y3 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x2, v.y3 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x3, v.y3 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x4, v.y3 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x5, v.y3 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x6, v.y3 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x7, v.y3 + month1yModifier, v.width, v.height);

  // month 1 - line 4
  drawCellOutline(page, v.x1, v.y4 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x2, v.y4 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x3, v.y4 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x4, v.y4 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x5, v.y4 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x6, v.y4 + month1yModifier, v.width, v.height);
  drawCellOutline(page, v.x7, v.y4 + month1yModifier, v.width, v.height);

  // month 1 - line 5
  if (
    (variables.month1Day1Weekday === "Sunday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Sunday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Sunday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x1, v.y5 + month1yModifier, v.width, v.height);
  }
  if (
    (variables.month1Day1Weekday === "Sunday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Sunday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x2, v.y5 + month1yModifier, v.width, v.height);
  }
  if (
    (variables.month1Day1Weekday === "Sunday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x3, v.y5 + month1yModifier, v.width, v.height);
  }
  if (
    (variables.month1Day1Weekday === "Monday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x4, v.y5 + month1yModifier, v.width, v.height);
  }
  if (
    (variables.month1Day1Weekday === "Tuesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x5, v.y5 + month1yModifier, v.width, v.height);
  }
  if (
    (variables.month1Day1Weekday === "Wednesday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 28) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x6, v.y5 + month1yModifier, v.width, v.height);
  }
  if (
    (variables.month1Day1Weekday === "Thursday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 29) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x7, v.y5 + month1yModifier, v.width, v.height);
  }

  // month 1 - line 6
  if (
    (variables.month1Day1Weekday === "Friday" && variables.month1DaysCount === 31) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 30) ||
    (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31)
  ) {
    drawCellOutline(page, v.x1, v.y6 + month1yModifier, v.width, v.height);
  }
  if (variables.month1Day1Weekday === "Saturday" && variables.month1DaysCount === 31) {
    drawCellOutline(page, v.x2, v.y6 + month1yModifier, v.width, v.height);
  }

  // Draw Cell Numbers
  if (variables.cellNumbers) {
    variables.cellNumbers
      .filter(
        (cellNumber: any) =>
          (month2_cellOutlines === "0" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6)) ||
          ((month2_cellOutlines === "1" ||
            month2_cellOutlines === "2" ||
            month2_cellOutlines === "3" ||
            month2_cellOutlines === "4" ||
            month2_cellOutlines === "5" ||
            month2_cellOutlines === "6" ||
            month2_cellOutlines === "7") &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7)) ||
          (month2_cellOutlines === "8" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1))) ||
          (month2_cellOutlines === "9" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2))) ||
          (month2_cellOutlines === "10" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3))) ||
          (month2_cellOutlines === "11" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4))) ||
          (month2_cellOutlines === "12" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5))) ||
          (month2_cellOutlines === "13" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6))) ||
          (month2_cellOutlines === "14" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7))) ||
          (month2_cellOutlines === "15" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1))) ||
          (month2_cellOutlines === "16" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2))) ||
          (month2_cellOutlines === "17" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3))) ||
          (month2_cellOutlines === "18" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4))) ||
          (month2_cellOutlines === "19" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5))) ||
          (month2_cellOutlines === "20" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6))) ||
          (month2_cellOutlines === "21" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x7))) ||
          (month2_cellOutlines === "22" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x1))) ||
          (month2_cellOutlines === "23" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x2))) ||
          (month2_cellOutlines === "24" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x3))) ||
          (month2_cellOutlines === "25" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x4))) ||
          (month2_cellOutlines === "26" &&
            (cellNumber.y === v.y1 ||
              cellNumber.y === v.y2 ||
              cellNumber.y === v.y3 ||
              cellNumber.y === v.y4 ||
              cellNumber.y === v.y5 ||
              cellNumber.y === v.y6 ||
              cellNumber.y === v.y7 ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y8 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x5) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x6) ||
              (cellNumber.y === v.y9 && cellNumber.x === v.x7) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x1) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x2) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x3) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x4) ||
              (cellNumber.y === v.y10 && cellNumber.x === v.x5)))
      )
      .forEach(async (cellNumber: any) => await drawCellNumbers(page, cellNumber, month1yModifier));
  }

  // Month 2
  if (month2_cellOutlines >= 1) drawMonthYear(page, `${variables.month2Name} ${variables.month2YearNumber}`, v.weekday_month2_y + 17);

  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x1 + 26, v.weekday_month2_y + 3, "SUNDAY");
  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x2 + 25, v.weekday_month2_y + 3, "MONDAY");
  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x3 + 22, v.weekday_month2_y + 3, "TUESDAY");
  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x4 + 12, v.weekday_month2_y + 3, "WEDNESDAY");
  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x5 + 17, v.weekday_month2_y + 3, "THURSDAY");
  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x6 + 28, v.weekday_month2_y + 3, "FRIDAY");
  if (month2_cellOutlines >= 1) drawWeekdays(page, v.x7 + 16, v.weekday_month2_y + 3, "SATURDAY");

  // weekdays outline
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x1, v.weekday_month2_y, v.width, 14);
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x2, v.weekday_month2_y, v.width, 14);
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x3, v.weekday_month2_y, v.width, 14);
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x4, v.weekday_month2_y, v.width, 14);
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x5, v.weekday_month2_y, v.width, 14);
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x6, v.weekday_month2_y, v.width, 14);
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x7, v.weekday_month2_y, v.width, 14);

  // month 2 - row 1
  if (month2_cellOutlines >= 1) drawCellOutline(page, v.x1, v.y7, v.width, v.height);
  if (month2_cellOutlines >= 2) drawCellOutline(page, v.x2, v.y7, v.width, v.height);
  if (month2_cellOutlines >= 3) drawCellOutline(page, v.x3, v.y7, v.width, v.height);
  if (month2_cellOutlines >= 4) drawCellOutline(page, v.x4, v.y7, v.width, v.height);
  if (month2_cellOutlines >= 5) drawCellOutline(page, v.x5, v.y7, v.width, v.height);
  if (month2_cellOutlines >= 6) drawCellOutline(page, v.x6, v.y7, v.width, v.height);
  if (month2_cellOutlines >= 7) drawCellOutline(page, v.x7, v.y7, v.width, v.height);

  // month 2 - line 2
  if (month2_cellOutlines >= 8) drawCellOutline(page, v.x1, v.y8, v.width, v.height);
  if (month2_cellOutlines >= 9) drawCellOutline(page, v.x2, v.y8, v.width, v.height);
  if (month2_cellOutlines >= 10) drawCellOutline(page, v.x3, v.y8, v.width, v.height);
  if (month2_cellOutlines >= 11) drawCellOutline(page, v.x4, v.y8, v.width, v.height);
  if (month2_cellOutlines >= 12) drawCellOutline(page, v.x5, v.y8, v.width, v.height);
  if (month2_cellOutlines >= 13) drawCellOutline(page, v.x6, v.y8, v.width, v.height);
  if (month2_cellOutlines >= 14) drawCellOutline(page, v.x7, v.y8, v.width, v.height);

  // month 2 - line 3
  if (month2_cellOutlines >= 15) drawCellOutline(page, v.x1, v.y9, v.width, v.height);
  if (month2_cellOutlines >= 16) drawCellOutline(page, v.x2, v.y9, v.width, v.height);
  if (month2_cellOutlines >= 17) drawCellOutline(page, v.x3, v.y9, v.width, v.height);
  if (month2_cellOutlines >= 18) drawCellOutline(page, v.x4, v.y9, v.width, v.height);
  if (month2_cellOutlines >= 19) drawCellOutline(page, v.x5, v.y9, v.width, v.height);
  if (month2_cellOutlines >= 20) drawCellOutline(page, v.x6, v.y9, v.width, v.height);
  if (month2_cellOutlines >= 21) drawCellOutline(page, v.x7, v.y9, v.width, v.height);

  // month 2 - line 4
  if (month2_cellOutlines >= 22) drawCellOutline(page, v.x1, v.y10, v.width, v.height);
  if (month2_cellOutlines >= 23) drawCellOutline(page, v.x2, v.y10, v.width, v.height);
  if (month2_cellOutlines >= 24) drawCellOutline(page, v.x3, v.y10, v.width, v.height);
  if (month2_cellOutlines >= 25) drawCellOutline(page, v.x4, v.y10, v.width, v.height);
  if (month2_cellOutlines >= 26) drawCellOutline(page, v.x5, v.y10, v.width, v.height);
  if (month2_cellOutlines >= 27) drawCellOutline(page, v.x6, v.y10, v.width, v.height);
  if (month2_cellOutlines >= 28) drawCellOutline(page, v.x7, v.y10, v.width, v.height);

  // Draw Cell Text
  if (residualRenalFunction >= 1) {
    drawCellDose(page, variables.cellText[0].x + 15, variables.cellText[0].y + month1yModifier + 24, "1st dose", "Vancomycin", "");
    drawCellLabTest(page, variables.cellText[1].x + 15, variables.cellText[1].y + month1yModifier + 24, "Go to clinic", "for lab tests", "");
    drawCellDose(page, variables.cellText[2].x + 15, variables.cellText[2].y + month1yModifier + 24, "2nd dose", "Vancomycin", "");
    drawCellLabTest(
      page,
      variables.cellText[3].x + 13,
      variables.cellText[3].y + month1yModifier + 26,
      "If dose change,",
      "go to clinic",
      "for lab tests"
    );
    drawCellDose(page, variables.cellText[4].x + 15, variables.cellText[4].y + month1yModifier + 24, "3rd dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[5].x + 15, variables.cellText[5].y + month1yModifier + 24, "4th dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[6].x + 15, variables.cellText[6].y + month1yModifier + 24, "5th dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[7].x + 15, variables.cellText[7].y + month1yModifier + 24, "6th dose", "Vancomycin*", "");
  } else if (residualRenalFunction < 1) {
    drawCellDose(page, variables.cellText[0].x + 15, variables.cellText[0].y + month1yModifier + 24, "1st dose", "Vancomycin", "");
    drawCellLabTest(page, variables.cellText[1].x + 15, variables.cellText[1].y + month1yModifier + 24, "Go to clinic", "for lab tests", "");
    drawCellDose(page, variables.cellText[2].x + 15, variables.cellText[2].y + month1yModifier + 24, "2nd dose", "Vancomycin", "");
    drawCellLabTest(
      page,
      variables.cellText[3].x + 13,
      variables.cellText[3].y + month1yModifier + 26,
      "If dose change,",
      "go to clinic",
      "for lab tests"
    );
    drawCellDose(page, variables.cellText[4].x + 15, variables.cellText[4].y + month1yModifier + 24, "3rd dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[5].x + 15, variables.cellText[5].y + month1yModifier + 24, "4th dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[6].x + 15, variables.cellText[6].y + month1yModifier + 24, "5th dose", "Vancomycin*", "");
  }

  // drawCellDose(page, 10, 30, month2_cellOutlines, "TEST", "");
};

export default drawPage;
