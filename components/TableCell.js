import React from "react";
import store, { cell_clicked } from "../src/store.js";

class TableCell extends React.Component {
  constructor(props) {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { rowIdx, cellIdx, gridcell } = this.props;
    return (
      <td
        onClick={() => store.dispatch(cell_clicked(rowIdx, cellIdx))}
        className={gridcell}
      />
    );
  }
}

export default TableCell;
