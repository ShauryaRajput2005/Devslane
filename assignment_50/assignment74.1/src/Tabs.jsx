function Tabs({ number, color, text, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`
        ${color} ${text} h-8 w-8 flex items-center justify-center
        border-2 border-orange-500 cursor-pointer
        transition-transform duration-200 ease-in-out
        hover:scale-110
        ${isActive ? "bg-orange-500 text-white" : ""}
      `}
    >
      <p>{number}</p>
    </div>
  );
}

export default Tabs;
