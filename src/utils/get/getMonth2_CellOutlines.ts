const getMonth2_CellOutlines = (weekday: string, day: number, monthlength: number) => {
  let boxesArray = {
    28: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  if (weekday === "Sunday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  } else if (weekday === "Monday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  } else if (weekday === "Tuesday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  } else if (weekday === "Wednesday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  } else if (weekday === "Thursday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  } else if (weekday === "Friday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  } else if (weekday === "Saturday") {
    boxesArray = {
      28: [0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      30: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      31: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    };
    if (monthlength === 28) return boxesArray[28][day - 1].toString();
    if (monthlength === 29) return boxesArray[29][day - 1].toString();
    if (monthlength === 30) return boxesArray[30][day - 1].toString();
    if (monthlength === 31) return boxesArray[31][day - 1].toString();
  }
};

export default getMonth2_CellOutlines;
