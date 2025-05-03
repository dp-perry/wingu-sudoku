import {useState} from "react";

import type {Difficulty, SudokuGameProps} from "./types/sudoku.ts";

import {Game} from "./features/sudoku/components/Game.tsx";
import {DifficultySelection} from "./components/screens/DifficultySelection.tsx";
import {BoardSelection} from "./components/screens/BoardSelection.tsx";
import {getPuzzleObject} from "./libs/sudoku/puzzles.ts";

function App() {
  const [difficulty, setDifficulty] = useState<null | Difficulty>(null);
  const [puzzle, setPuzzle] = useState<SudokuGameProps | null>(null);

  const handleDifficultySelection = (new_difficulty: Difficulty | null) => {
    setDifficulty(new_difficulty);
  }

  const handlePuzzleSelection = (puzzle_id: string | null) => {
    // Allow user to return to difficulty selection
    if (puzzle_id === null) {
      setPuzzle(null);
      return
    }
    // Load data for the given puzzle
    const puzzleData = getPuzzleObject(puzzle_id, difficulty!)
    if (!puzzleData) {
      // TODO: Properly handle invalid puzzles
      console.error('Failed to load puzzle data')
      return;
    }
    setPuzzle(puzzleData)
  }

  return (
   <div className=''>
     {
       difficulty === null && (
         <DifficultySelection
           onDifficultySelection={handleDifficultySelection}
         />
       )
     }
     {
       difficulty !== null && puzzle == null && (
         <BoardSelection
           difficulty={difficulty}
           onDifficultySelection={handleDifficultySelection}
           onPuzzleSelection={handlePuzzleSelection}
         />
       )
     }
     {
       difficulty !== null && puzzle !== null && (
         <Game
           puzzle={puzzle}
           onUnsetPuzzle={() => handlePuzzleSelection(null)}
         />
       )
     }
   </div>
  )
}

export default App
