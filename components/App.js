import React from "react";
import store, { add_new_row, selected_color_change } from "../src/store.js";
import Table from "./Table.js";
export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = store.getState();
    //(this.state);
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  onChange_SelectedColor(e) {
    store.dispatch(selected_color_change(e.target.value));
  }
  onClick_addNewRow() {
    store.dispatch(add_new_row());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { grid } = this.state;
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id="add-row" onClick={this.onClick_addNewRow}>
            Add a row
          </button>
          <select
            value={this.state.selectedColor}
            onChange={e => this.onChange_SelectedColor(e)}
          >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <Table grid={grid} selectedColor={this.state.selectedColor} />
      </div>
    );
  }
}
