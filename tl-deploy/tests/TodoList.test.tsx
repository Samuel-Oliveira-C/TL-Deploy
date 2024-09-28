import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from '@/components/TodoList';


describe('TodoList component', () => {
    test('renderiza o componente corretamente', () => {
        render(<TodoList />);
        

        // @ts-ignore
        expect(screen.getByText('Todo-List')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByPlaceholderText('Adicionar item')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByText('Adicionar')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByText('Não tem nenhuma tarefa')).toBeInTheDocument();
});

    test('adiciona uma nova tarefa', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Adicionar item');
        const addButton = screen.getByText('Adicionar');

        fireEvent.change(input, { target: { value: 'Nova tarefa' } });
        fireEvent.click(addButton);


        // @ts-ignore
        expect(screen.getByText('Nova tarefa')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByText('1 tarefa')).toBeInTheDocument();
    });

    test('marca uma tarefa como concluída', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Adicionar item');
        const addButton = screen.getByText('Adicionar');

        fireEvent.change(input, { target: { value: 'Tarefa para concluir' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        // @ts-ignore
        expect(checkbox).not.toBeChecked();  //é o estado inicial que é not Checked.
        
        fireEvent.click(checkbox);
        // @ts-ignore
        expect(checkbox).toBeChecked(); //depois do click tem que ser o estado Checked

    });

    test('remove uma tarefa', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Adicionar item');
        const addButton = screen.getByText('Adicionar');

        fireEvent.change(input, { target: { value: 'Tarefa para remover' } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByText('Deletar');
        fireEvent.click(deleteButton);
        // @ts-ignore
        expect(screen.queryByText('Tarefa para remover')).not.toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByText('Não tem nenhuma tarefa')).toBeInTheDocument();
    });
});

