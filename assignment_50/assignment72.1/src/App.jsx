import { useState } from 'react';
import './App.css';
import Header from './Header';
import ToDoForm from './ToDoForm';
import Task from './Task';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const [formshow, setformshow] = useState(false);
  const [buttonShow, setbuttonShow] = useState(true);

  const handleAdd = () => {
    setformshow(true);
    setbuttonShow(false);
  }

  const handleRefresh = () => {
    console.log("Refreshing...");
    setTaskList([]);
    setDoneList([]);

  };


  const handleCheck = (taskIndex) => {
    const completed = taskList[taskIndex]
    setTaskList(taskList.filter((task, i) => i !== taskIndex));
    setDoneList([...doneList, completed]);

  }
  const handleUncheck = (taskIndex) => {
    const undone = doneList[taskIndex]
    setDoneList(doneList.filter((task, i) => i !== taskIndex));
    setTaskList([...taskList, undone]);

  }

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
    setformshow(false);
    setbuttonShow(true);
  }

  const handleCancel = () => {
    setformshow(false);
    setbuttonShow(true);
    console.log("Task creation cancelled");
  }
  return (

    <div className="flex flex-col h-screen text-black gap-5 p-4 bg-gray-100">


      <Header />


      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-extrabold">Things to get done</h2>
        <button className="bg-yellow-400 hover:bg-yellow-500 hover:shadow-2xs hover:shadow-black text-white font-semibold px-3  py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-102"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>


      <div className='flex flex-col gap-2 space-evenly items-start ml-2 shadow-lg '>

        <p className='text-xl font-semibold p-4 text-gray-600'>Things to do : </p>

        {taskList.length > 0 && <div className='flex flex-col gap-1 ml-4'>

          {taskList.map((task, index) => (
            <div key={index} className="text-gray-500">
              <Task task={task} onCheck={() => handleCheck(index)} />
            </div>
          ))}


        </div>}

        <div className='ml-4 mb-4 '>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${formshow ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            {formshow && <ToDoForm onSave={handleAddTask} onCancel={handleCancel} />}
          </div>


          {buttonShow ? <button className="bg-yellow-400 hover:bg-yellow-500 hover:shadow-2xs hover:shadow-black text-white font-semibold px-3  py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-102" onClick={handleAdd}>Add To-Do</button> : null}

        </div>
      </div>

      <div className='flex flex-col  items-start gap-2 ml-2'>

        <h2 className='text-gray-600 font-bold text-xl'>Things done : </h2>
        {doneList.length > 0 && <div className='flex flex-col gap-1 ml-4'>

          {doneList.map((task, index) => (
            <div key={index} className="text-gray-500">
              <Task task={task} onCheck={() => handleUncheck(index)} checked={true} />
            </div>
          ))}


        </div>}
      </div>

    </div >
  );
}

export default App;
