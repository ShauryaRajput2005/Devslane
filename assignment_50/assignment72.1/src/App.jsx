import './App.css';
import Header from './Header';
import ToDoForm from './ToDoForm';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, markDone, markUndone, refresh } from './todoSlice';
import { useState } from 'react';

function App() {
  const { tasks, done } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [formshow, setformshow] = useState(false);
  const [buttonShow, setbuttonShow] = useState(true);

  const handleAdd = () => {
    setformshow(true);
    setbuttonShow(false);
  };

  const handleAddTask = (task) => {
    dispatch(addTask(task));
    setformshow(false);
    setbuttonShow(true);
  };

  const handleCancel = () => {
    setformshow(false);
    setbuttonShow(true);
  };

  return (
    <div className="flex flex-col h-screen text-black gap-5 p-4 bg-gray-100">
      <Header />

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold">Things to get done</h2>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-3 py-3 rounded-lg shadow-md"
          onClick={() => dispatch(refresh())}
        >
          Refresh
        </button>
      </div>

      <div className="flex flex-col gap-2 items-start ml-2 shadow-lg">
        <p className="text-xl font-semibold p-4 text-gray-600">Things to do :</p>

        {tasks.length > 0 && (
          <div className="flex flex-col gap-1 ml-4">
            {tasks.map((task, index) => (
              <div key={index} className="text-gray-500">
                <Task task={task} onCheck={() => dispatch(markDone(index))} />
              </div>
            ))}
          </div>
        )}

        <div className="ml-4 mb-4">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              formshow ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {formshow && <ToDoForm onSave={handleAddTask} onCancel={handleCancel} />}
          </div>

          {buttonShow && (
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-3 py-3 rounded-3xl shadow-md"
              onClick={handleAdd}
            >
              + Add To-Do
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 ml-2">
        <h2 className="text-gray-600 font-bold text-xl">Things done :</h2>
        {done.length > 0 && (
          <div className="flex flex-col gap-1 ml-4">
            {done.map((task, index) => (
              <div key={index} className="text-gray-500">
                <Task task={task} onCheck={() => dispatch(markUndone(index))} checked={true} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
