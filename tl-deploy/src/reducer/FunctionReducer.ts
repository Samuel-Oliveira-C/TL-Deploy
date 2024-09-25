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
};

const reducerFunction = (state: ListState[], action: Action): ListState[] => {
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
export type {ListState}