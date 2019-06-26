import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {
  return (
    <tr>
      {props.gridRow.map((cell, cellIdx) => {
        return (
          <TableCell
            key={cellIdx}
            gridcell={cell}
            rowIdx={props.rowIdx}
            cellIdx={cellIdx}
            selectedColor={props.selectedColor}
          />
        );
      })}
    </tr>
  );
}

export default TableRow;
