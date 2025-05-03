import {SudokuPuzzleProps} from "../../../types/sudoku.ts";
import {Button} from "../../../components/ui/Button.tsx";
import {Card} from "../../../components/ui/Card.tsx";

export const PuzzlePreview = (
  {puzzle, onClick}: {puzzle: SudokuPuzzleProps, onClick: () => void}
) => {
  return (
    <Card key={puzzle.puzzle_id} padding={'sm'}>
      <div className='flex flex-col h-full gap-4'>
        <div className='font-semibold text-center'>{puzzle.name}</div>
        <div className='flex-1 flex flex-col justify-center items-center min-h-[50px] rounded border border-gray-200'>
          preview
        </div>
        <div className='flex justify-center'>
          <Button onClick={onClick}>
            Play puzzle
          </Button>
        </div>
      </div>
    </Card>
  );
};