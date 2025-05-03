import {Eraser, Grid2X2, Lightbulb, LucideProps, NotebookPen, Pencil, RotateCcw} from "lucide-react";
import {ForwardRefExoticComponent} from "react";
import {ControlButton} from "./ControlButton.tsx";
import {ActionButton} from "./ActionButton.tsx";

type ActionButtonProps = {
  icon: ForwardRefExoticComponent<LucideProps>;
  label: string;
  action: () => void
  disabled: boolean;
}

export const Controls = (
  {selectedCell}: {selectedCell: boolean}
) => {
  const isNoteMode = false;
  const handleNoteInput = (value: number) => {console.log(value);};
  const handleNumberInput = (value: number) => {console.log(value);};

  const actionButtons: ActionButtonProps[] = [
    {icon: RotateCcw, label: 'Undo', action: () => null, disabled: !selectedCell},
    {icon: Eraser, label: 'Clear', action: () => null, disabled: !selectedCell},
    // {icon: Eraser, label: 'Redo', action: () => null, disabled: !selectedCell},
    {icon: Pencil, label: 'Notes', action: () => null, disabled: false},
    {icon: NotebookPen, label: 'Fill Notes', action: () => null, disabled: false},
    {icon: Lightbulb, label: 'Hint', action: () => null, disabled: false},
    {icon: Grid2X2, label: 'Complete', action: () => null, disabled: false}
  ]
  return (
    <div className='flex flex-col items-center gap-4 max-w-xs mx-auto'>
      <div className='grid grid-cols-3 gap-2 w-full'>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
           <ControlButton
             key={num}
             onClick={() => isNoteMode ? handleNoteInput(num) : handleNumberInput(num)}
             disabled={!selectedCell}
           >
             {num}
           </ControlButton>
         ))}
      </div>

      <div className='grid grid-cols-3 gap-2 w-full'>
        {
          actionButtons.map((button, index) => (
            <ActionButton
              key={index}
              onClick={button.action}
              disabled={button.disabled}
            >
              <button.icon className={'size-5 mb-1'} />
              {button.label}
            </ActionButton>
          ))
        }
      </div>
    </div>
  );
};