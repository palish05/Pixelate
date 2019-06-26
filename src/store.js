import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

const ACTION_CONSTANTS = {
  ADD_NEW_ROW: "ADD_NEW_ROW",
  SELECTED_COLOR_CHANGE: "SELECTED_COLOR_CHANGE",
  CELL_CLICKED: "CELL_CLICKED"
};

const newObj = () => {
  return Object.assign(
    {},
    {
      color: ""
    }
  );
};

const initialState = {
  grid: [],
  selectedColor: "red"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.ADD_NEW_ROW:
      // const colSize = state.grid[0].length;
      const newArray = state.grid.slice();
      newArray.push(new Array(20).fill(""));
      return { ...state, grid: newArray };

    case ACTION_CONSTANTS.SELECTED_COLOR_CHANGE:
      return { ...state, selectedColor: action.color };

    case ACTION_CONSTANTS.CELL_CLICKED:
      const newGrid = state.grid.slice();
      newGrid[action.rowIdx][action.colIdx] =
        newGrid[action.rowIdx][action.colIdx] == state.selectedColor
          ? ""
          : state.selectedColor;
      return Object.assign({}, state, { grid: newGrid });
    default:
      return state;
  }
};

const add_new_row = () => {
  return { type: ACTION_CONSTANTS.ADD_NEW_ROW };
};

const selected_color_change = selected_color => {
  return {
    type: ACTION_CONSTANTS.SELECTED_COLOR_CHANGE,
    color: selected_color
  };
};

const cell_clicked = (rowIdx, colIdx) => {
  return {
    type: ACTION_CONSTANTS.CELL_CLICKED,
    rowIdx,
    colIdx
  };
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
export { add_new_row, selected_color_change, cell_clicked };
