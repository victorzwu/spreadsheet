import SheetComponent from "./SheetComponent";
import "../styles/SheetHolder.css";

// a wrapper for the sheet component that allows the sheet to be scrolled
// the sheet is a grid of cells
// the cells are clickable
// the cells have a value
// the cells have a label
// the cells have a class name
// the cells have a style
// the cells have a click handler

interface SheetHolderProps {
  cellsValues: Array<Array<string>>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentCell: string;
  currentlyEditingUsernames: { [key: string]: string };
  myUsername: string;
}

function SheetHolder({
  cellsValues,
  onClick,
  currentCell,
  currentlyEditingUsernames,
  myUsername,
}: SheetHolderProps) {
  return (
    <div className="sheet-holder">
      <SheetComponent
        cellsValues={cellsValues}
        onClick={onClick}
        currentCell={currentCell}
        currentlyEditingUsernames={currentlyEditingUsernames}
        myUsername={myUsername}
      />
    </div>
  );
} // SheetHolder

export default SheetHolder;
