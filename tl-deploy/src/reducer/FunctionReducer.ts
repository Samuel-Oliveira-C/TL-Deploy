import { v4 as uuidv4 } from 'uuid';

type ListItemsType = {
    id: string 
    nameTask: string
    checkbox: boolean
}

type AddItem = {
    id: string 
    nameTask: string
    checkbox: boolean
    type: "Add"
}

type RemoveItem = {
    id:string 
    type: "Remove"
}

type ToggleElement = {
    checkbox:boolean
    id:string
    type: "Toggle"
}

type ListState = AddItem | RemoveItem | ToggleElement

const reducerFunction = (arg: ListState, items: ListItemsType[]) => {
    switch (arg.type) {
        case "Add":
            return [...items, { id: uuidv4(), nameTask: arg.nameTask, checkbox: false }];
        
        case "Remove":
            return items.filter(item => item.id !== arg.id);

        case "Toggle":
            return items.map(item =>
                item.id === arg.id ? { ...item, checkbox: !item.checkbox } : item
            );

        default:
            return items;
    }
};

export {reducerFunction}