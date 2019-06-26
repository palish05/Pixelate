import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIdx) => {
          return (
            <TableRow
              key={rowIdx}
              gridRow={row}
              rowIdx={rowIdx}
              selectedColor={props.selectedColor}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
