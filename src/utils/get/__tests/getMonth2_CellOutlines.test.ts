import getMonth2_CellOutlines from "../getMonth2_CellOutlines";

describe("getMonth2_CellOutlines", () => {
  it("should return the correct outline for Sunday", () => {
    expect(getMonth2_CellOutlines("Sunday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Sunday", 15, 30)).toBe("7");
    expect(getMonth2_CellOutlines("Sunday", 31, 31)).toBe("23");
  });

  it("should return the correct outline for Monday", () => {
    expect(getMonth2_CellOutlines("Monday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Monday", 15, 30)).toBe("8");
    expect(getMonth2_CellOutlines("Monday", 31, 31)).toBe("24");
  });

  it("should return the correct outline for Tuesday", () => {
    expect(getMonth2_CellOutlines("Tuesday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Tuesday", 15, 30)).toBe("9");
    expect(getMonth2_CellOutlines("Tuesday", 31, 31)).toBe("25");
  });

  it("should return the correct outline for Wednesday", () => {
    expect(getMonth2_CellOutlines("Wednesday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Wednesday", 15, 30)).toBe("10");
    expect(getMonth2_CellOutlines("Wednesday", 31, 31)).toBe("26");
  });

  it("should return the correct outline for Thursday", () => {
    expect(getMonth2_CellOutlines("Thursday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Thursday", 15, 30)).toBe("11");
    expect(getMonth2_CellOutlines("Thursday", 31, 31)).toBe("20");
  });

  it("should return the correct outline for Friday", () => {
    expect(getMonth2_CellOutlines("Friday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Friday", 15, 30)).toBe("7");
    expect(getMonth2_CellOutlines("Friday", 31, 31)).toBe("21");
  });

  it("should return the correct outline for Saturday", () => {
    expect(getMonth2_CellOutlines("Saturday", 1, 28)).toBe("0");
    expect(getMonth2_CellOutlines("Saturday", 15, 30)).toBe("7");
    expect(getMonth2_CellOutlines("Saturday", 31, 31)).toBe("22");
  });
});
