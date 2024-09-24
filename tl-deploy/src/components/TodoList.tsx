import { useReducer, useState } from "react"
import { reducerFunction } from "@/reducer/FunctionReducer";
import { v4 as uuidv4 } from "uuid";

const useItemCount = (items:any[]) => {
    return items.length > 1? ` ${items.length} tarefas` :`${items.length} tarefa`
};

const TodoList = () => {
        //States
    const [state,dispatch] = useReducer(reducerFunction,[]);
    const [task, setTask] = useState("");
    const itemCount = useItemCount(state);

        //Eventos
    const handleAddItem = () => {
        if (task.trim() !== "") {
            dispatch({
                type: "Add",
                id: uuidv4(),
                nameTask: task,
                checkbox: false
            });
            setTask(""); // Limpa o input
        }
    };

    const handleRemoveItem = (id: string) => {
        dispatch({ type: "Remove", id });
    };

    const handleToggleCheckbox = (id: string) => {
        dispatch({ type: "Toggle", id});
    };
        //jsx
    return(
        <div className="flex flex-col absolute">
            <div className="flex flex-col gap-2 mt-28">
                <h1 className="text-center text-xl font-semibold">Todo-List</h1>
                <div className="flex gap-4">
                    <input 
                        className="text-center rounded-md text-black"
                        type="text" 
                        placeholder="Adicionar item"
                        value={task}
                        onChange={(text) => setTask(text.target.value)}
                        />
                    <button
                        onClick={handleAddItem}
                        className="bg-blue-500 text-white rounded-md p-2 mt-2"
                    >Adicionar</button>
                </div>
            </div>
            <div className="mt-4">
                {state.length > 0 ? itemCount : "Não tem nenhuma tarefa"}
            </div>
            <div className="mt-4">
                {state.length > 0 && (
                    <ul>
                        {state.map((item: any) => (
                            <li key={item.id} className="flex justify-between items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={item.checkbox}
                                        onChange={() => handleToggleCheckbox(item.id)}
                                    />
                                    <span>{item.nameTask}</span>
                                </div>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Deletar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
/** 
 *  
 *  
 */


export {TodoList}