export type Difficulty = 'easy' | 'medium' | 'hard' | 'evil'

export type SudokuCellProps = {
  value: number;
  state: string;
  notes: Set<number>
}

export type SudokuPuzzleProps = {
  puzzle_id: string;
  difficulty: string;
  name: string;
  notes: string;
  board: string
}

export type SudokuGameProps = {
  puzzle_id: string;
  difficulty: string;
  name: string;
  notes: string;
  board: SudokuCellProps[][]
}