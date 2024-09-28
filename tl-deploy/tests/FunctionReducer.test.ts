import { v4 as uuidv4 } from 'uuid';  // Mock necessário para id único
import { reducerFunction } from '@/reducer/FunctionReducer';  // Ajuste o caminho para onde a função está localizada

describe('reducerFunction', () => {
    test('adiciona uma nova tarefa', () => {
        // @ts-ignore
        const initialState = [];
        const action = {
            type: 'Add',
            nameTask: 'Nova tarefa',
        };
        // @ts-ignore
        const result = reducerFunction(initialState, action);
        // @ts-ignore
        expect(result.length).toBe(1);
        // @ts-ignore
        expect(result[0].nameTask).toBe('Nova tarefa');
        // @ts-ignore
        expect(result[0].checkbox).toBe(false);
        // @ts-ignore
        expect(result[0]).toHaveProperty('id');  // Verifica se o id foi gerado
    });

    test('remove uma tarefa', () => {
        const initialState = [
            { id: '1', nameTask: 'Tarefa 1', checkbox: false },
            { id: '2', nameTask: 'Tarefa 2', checkbox: true },
        ];
        const action = {
            type: 'Remove',
            id: '1',
        };
        // @ts-ignore
        const result = reducerFunction(initialState, action);
        // @ts-ignore
        expect(result.length).toBe(1);
        // @ts-ignore
        expect(result[0].id).toBe('2');  // Apenas a tarefa com id '2' deve permanecer
    });

    test('alternar o estado de checkbox de uma tarefa', () => {
        const initialState = [
            { id: '1', nameTask: 'Tarefa 1', checkbox: false },
            { id: '2', nameTask: 'Tarefa 2', checkbox: true },
        ];
        const action = {
            type: 'Toggle',
            id: '1',
        };
        // @ts-ignore
        const result = reducerFunction(initialState, action);
        // @ts-ignore
        expect(result[0].checkbox).toBe(true);  // O checkbox da primeira tarefa foi alternado para true

        // @ts-ignore
        expect(result[1].checkbox).toBe(true);  // O checkbox da segunda tarefa permanece true
    });

    test('retorna o estado padrão para uma ação desconhecida', () => {
        const initialState = [
            { id: '1', nameTask: 'Tarefa 1', checkbox: false },
        ];
        const action = {
            type: 'Unknown',
        };
// @ts-ignore
        const result = reducerFunction(initialState, action);
        // @ts-ignore
        expect(result).toEqual(initialState);  // O estado não deve mudar para uma ação desconhecida
    });
});
