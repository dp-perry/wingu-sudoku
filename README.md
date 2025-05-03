## Wingu Sudoku - WIP
> **Note**: This is a Work in Progress, this project will be a pure React version of the https://github.com/dp-perry/sudoku-nextjs app removing Next.js.
> Reason being that Next.js is unnecessary for an app like this.

A simple Sudoku app meant to work well on a mobile device without all the ads.

### Features
- None


### Road map
#### Version 1.0
- Error detection after the next move
- 3 Levels of hints, Cell indication, Strategy Suggestion, Digit or notes suggested
- Mobile  friendly
- Manage notes
- Progress saved in localStorage on a single device
- Create custom Puzzles

#### Version 1.1
- Time your progress on each puzzle
- Conflict detection

#### Version 1.2
- Significantly increase the number of available puzzles

#### Version 1.3
- Add Settings,
  - Let users turn error detection on/off
  - Turn conflict detection on/off
- Add keyboard shortcut support

#### Version 2.0
- Use Electron to create a desktop version


## Running locally

Clone the repository and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun run dev
```

Browse to [http://localhost:5173/](http://localhost:5173/) to start playing
