import {Difficulty} from "../../types/sudoku.ts";
import {Card} from "../ui/Card.tsx";
import {Title} from "../ui/Title.tsx";
import {Button} from "../ui/Button.tsx";

const difficulties: Difficulty[] = ['easy', 'medium', 'hard', 'evil'];

export const DifficultySelection = (
  {onDifficultySelection}: {onDifficultySelection: (newDifficulty: Difficulty) => void}
) => {
  return (
    <div className='w-lg mx-auto space-y-8 py-16'>
      <div className='text-center'>
        <Title variant='h1'>Wingu Sudoku</Title>
      </div>
      <Card>
        <div className='space-y-6'>
          <div className='text-center'>
            <div className='font-semibold text-xl'>
              Choose Difficulty
            </div>
            <div>Select a level to start playing</div>
          </div>
          <div className='grid gap-4'>
            {
              difficulties.map((difficulty: Difficulty) => (
                <Button
                  key={difficulty}
                  onClick={() => onDifficultySelection(difficulty)}
                  size='xl'
                >
                  {difficulty}
                </Button>
              ))
            }
          </div>
        </div>
      </Card>
    </div>
  );
};