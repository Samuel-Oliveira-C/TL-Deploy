import { useReducer } from "react"
import { reducerFunction } from "@/reducer/FunctionReducer";

const TodoList = () => {
    const [state,dispatch] = useReducer(reducerFunction,[]);
    
    return(
        <div>
            <div className="flex flex-col">
                <h1></h1>
                <input 
                    type="text" 
                    required
                    />
            </div>
            <div>{/**aqui vai o tamanho da lista e uma renderização condicional */}</div> 
            <div>{/**contendo os elementos da lista */}</div>
        </div>
    )
}
/** Fazer o useReducer
 *  Criar um custom Hook para a quantidade de itens
 *  Criar um objeto do input com os UUIDS
 *  depois criar a lista
 */


export {TodoList}