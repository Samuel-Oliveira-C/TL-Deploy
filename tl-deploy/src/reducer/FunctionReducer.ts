type AddItem = {
    id: any //inicial até baixar a biblioteca
    nameTask: string
    checkbox: boolean
    type: "Add"
}

type RemoveItem = {
    id: any //inicial até baixar a biblioteca
    type: "Remove"
}

type ToggleElement = {
    checkbox:boolean
    type: "Toggle"
}

type ListState = AddItem | RemoveItem | ToggleElement

const reducerFunction = (arg:ListState,items:[]) =>{
    switch (arg.type) {
        case "Add":
            
            return 
        case "Remove": return
        case "Toggle": return
        default:
            break;
    }
}

export {reducerFunction}