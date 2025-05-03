import {SudokuGameProps} from "../../../types/sudoku.ts";
import {Cell} from "./Cell.tsx";

export const Board = (
  {sudoku}: {sudoku: SudokuGameProps}
) => {
  const board = sudoku.board;

  return (
    <div className=''>
      <div className='grid grid-rows-9 grid-cols-9 overflow-hidden rounded-lg shadow border border-gray-200 max-w-md aspect-square w-full mx-auto bg-white'>
        {
          board.map((row, rowIndex) =>
            row.map((col, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                cell={col}
              />
            ))
          )
        }
      </div>
    </div>
  );
};