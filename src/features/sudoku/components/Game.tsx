import {Board} from "./Board.tsx";
import {Controls} from "./Controls.tsx";
import {SudokuGameProps} from "../../../types/sudoku.ts";
import {ArrowLeft} from "lucide-react";
import {Title} from "../../../components/ui/Title.tsx";

type GameProps = {
  puzzle: SudokuGameProps
  onUnsetPuzzle: () => void;
}

export const Game = (
  {puzzle, onUnsetPuzzle}: GameProps
) => {
  return (
    <div className='space-y-8 py-8 relative'>
      <div className='fixed top-8 left-8'>
        <div
          onClick={onUnsetPuzzle}
          className='py-2 px-4 border flex items-center gap-2 border-gray-400 rounded-lg cursor-pointer hover:bg-green-400 hover:text-white'
        >
          <ArrowLeft className={'size-5'} /> Back to menu
        </div>
      </div>

      <div className='text-center'>
        <Title variant='h2'>{puzzle.name}</Title>
      </div>

      <Board sudoku={puzzle} />

      <Controls selectedCell={false} />
    </div>
  );
};