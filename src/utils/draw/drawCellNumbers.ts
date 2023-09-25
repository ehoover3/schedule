import { rgb } from "pdf-lib";

const drawCellNumbers = (page: any, cellNumber: any, month1yModifier: number) => {
  page.drawText(cellNumber.text, {
    size: 12,
    x: cellNumber.x,
    y: cellNumber.y + month1yModifier + 35,
    color: rgb(0, 0, 0),
  });
};

export default drawCellNumbers;
