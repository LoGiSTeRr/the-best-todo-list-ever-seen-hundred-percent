import ToDoListManager from "@/components/ToDoListManager";

export default function Home() {
     return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100">
            <ToDoListManager/>
        </main>
    );
}
