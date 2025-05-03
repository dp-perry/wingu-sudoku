import {SudokuCellProps} from "../../../types/sudoku.ts";
import {Notes} from "./Notes.tsx";

export const Cell = (
  {cell}: {cell: SudokuCellProps}
) => {
  return (
    <div className={'' +
      'flex items-center justify-center relative' +
      ' aspect-square cursor-pointer transition-colors duration-150' +
      ' border-r border-b border-gray-200'
    }>
      {
        cell.value === 0 ? '' : cell.value
      }
      <Notes notes={cell.notes} />
    </div>
  );
};