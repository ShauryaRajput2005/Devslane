import { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  const [num, setNum] = useState(2);

  function nextTable() {
    setNum(num + 1);
  }

  return (
      <div className="flex flex-col ">
        <div >
          <button className="bg-indigo-500 rounded-lg py-2 px-4" onClick={nextTable}>Next</button>
        </div>
        <div>
          <TableRow num={num} i={1} />
          <TableRow num={num} i={2} />
          <TableRow num={num} i={3} />
          <TableRow num={num} i={4} />
          <TableRow num={num} i={5} />
        </div>
      </div>
    
  );
}

export default Table;
