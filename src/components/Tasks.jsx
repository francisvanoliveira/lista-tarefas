import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigates = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description);

        navigates(`/task?id=${query.toString()}}`);
    }

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </button>
                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks