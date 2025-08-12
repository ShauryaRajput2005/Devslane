function Tabs({ number, color,text}) {
  return (
    <div className={`${color}  ${text} h-8 w-8 flex items-center justify-center border-2 border-orange-500   transition-transform duration-200 ease-in-out hover:scale-115`}>
      <p>{number}</p>
    </div>
  );
}


export default Tabs
