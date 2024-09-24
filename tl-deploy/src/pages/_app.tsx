import "@/styles/globals.css";
import { TodoList } from "@/components/TodoList";

export default function App() {
  return (
    <section className="flex flex-col justify-center items-center mt-4 relative ">
      <TodoList />
    </section>
  );
}
