export const Notes = (
  {notes}: {notes: Set<number>}
) => {
  return (
    <div>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="sudoku-note">
          {
            notes.has(i + 1) ? i + 1 : ''
          }
        </div>
      ))}
    </div>
  );
};