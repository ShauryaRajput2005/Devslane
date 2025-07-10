function TableRow({ num, i }) {
  return (
    <div>
      <p>{num} x {i} = {num * i}</p>
    </div>
  );
}

export default TableRow;
