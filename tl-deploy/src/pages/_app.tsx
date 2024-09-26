import "@/styles/globals.css";
import Head from "next/head";
import { TodoList } from "@/components/TodoList";

export default function App() {
  return (
    <>
    <Head>
      <meta name="description" content="Todo-List" />
      <title>Pagina do Todo-List</title>
    </Head>
    <section className="flex justify-center  mt-4  ">
      <TodoList />
    </section>
    </>
  );
}
