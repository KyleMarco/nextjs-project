import InsertTodo from "@/app/components/todo/insert-todo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-96 gap-2">
      <InsertTodo />
    </div>
  );
}
