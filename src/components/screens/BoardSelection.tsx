import {Difficulty} from "../../types/sudoku.ts";
import {getPuzzleList} from "../../libs/sudoku/puzzles.ts";
import {Title} from "../ui/Title.tsx";
import {ArrowLeft} from "lucide-react";
import {PuzzlePreview} from "../../features/preview/components/PuzzlePreview.tsx";

type BoardSelectionProps = {
  difficulty: Difficulty;
  onDifficultySelection: (new_difficulty: null) => void;
  onPuzzleSelection: (puzzle_id: string) => void;
}

export const BoardSelection = (
  {difficulty, onDifficultySelection, onPuzzleSelection}: BoardSelectionProps
) => {
  const puzzles = getPuzzleList(difficulty)

  const handleUnsetDifficulty = (): void => {
    onDifficultySelection(null)
  }

  const handlePuzzleSelection = (puzzle_id: string) => {
    onPuzzleSelection(puzzle_id)
  }
  return (
    <div className='w-2xl mx-auto space-y-8 relative py-8'>
      <div className='relative'>
        <div className='fixed top-8 left-8'>
          <div
            onClick={handleUnsetDifficulty}
            className='py-2 px-4 border flex items-center gap-2 border-gray-400 rounded-lg cursor-pointer hover:bg-green-400 hover:text-white'
          >
            <ArrowLeft className={'size-5'} /> Back to menu
          </div>
        </div>

        <div className='text-center'>
          <Title variant='h1'>{difficulty} puzzles</Title>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {
          puzzles.map((puzzle) => (
            <PuzzlePreview
              key={puzzle.puzzle_id}
              puzzle={puzzle}
              onClick={() => handlePuzzleSelection(puzzle.puzzle_id)}
            />
          ))
        }
      </div>
    </div>
  );
};