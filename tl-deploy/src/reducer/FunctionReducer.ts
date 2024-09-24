/** 
import { v4 as uuidv4 } from 'uuid';

type ListItemsType = {
    id: string 
    nameTask: string
    checkbox: boolean
}

type AddItem = {
    type: "Add"
    id: string;
    nameTask: string;
    checkbox: false;
}

type RemoveItem = {
    type: "Remove"
    id: string
}

type ToggleElement = {
    type: "Toggle"
    id: string
}

type ListState = AddItem | RemoveItem | ToggleElement

const reducerFunction = (arg: ListState, items: ListItemsType[]): ListItemsType[] => {
    switch (arg.type) {
        case "Add":
            return [...items, { id: uuidv4(), nameTask: arg.nameTask,  checkbox: false }];
        
        case "Remove":
            return items.filter(item => item.id !== item.id);

        case "Toggle":
            return items.map(item =>
                item.id === item.id ? { ...item, checkbox: !item.checkbox } : item
            );

        default:
            return items;
    }
};

export {reducerFunction}
*/
import { v4 as uuidv4 } from 'uuid';

type AddItem = {
    type: "Add";
    id: string;
    nameTask: string;
    checkbox: boolean;
};

type RemoveItem = {
    type: "Remove";
    id: string;
};

type ToggleElement = {
    type: "Toggle";
    id: string;
};

type Action = AddItem | RemoveItem | ToggleElement;
type ListState = {
    id: string;
    nameTask: string;
    checkbox: boolean;
}[];

const reducerFunction = (state: ListState, action: Action): ListState => {
    switch (action.type) {
        case "Add":
            return [...state, { id: uuidv4(), nameTask: action.nameTask, checkbox: false }];
        
        case "Remove":
            return state.filter(item => item.id !== action.id);

        case "Toggle":
            return state.map(item =>
                item.id === action.id ? { ...item, checkbox: !item.checkbox } : item
            );

        default:
            return state;
    }
};

export { reducerFunction };
