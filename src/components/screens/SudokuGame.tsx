import {Title} from "../ui/Title.tsx";
import {Difficulties, SudokuGameProps} from "../../types/sudoku.ts";
import {Game} from "../../features/sudoku/components/Game.tsx";

export const SudokuGame = (
  {game, difficulty}: {game: SudokuGameProps, difficulty: Difficulties}
) => {
  if (!game) {
      return (
        <div>
          On noes, could not load that puzzle right now!
        </div>
      )
    }
  return (
    <div>
      <div className='text-center mx-auto'>
        <Title variant={'h2'}>{game.name}</Title>
      </div>
      <Game />
    </div>
  );
};