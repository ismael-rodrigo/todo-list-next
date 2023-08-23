import { Task } from "@/types/Task";
import { useEffect, useMemo, useState } from "react";

export type AddTaskProp = Omit<Task, "id" | "done">

export default function useTask() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasksOfLocalStorage = () => {
        const tasks = localStorage.getItem("tasks")
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
    }

    const updateTasksOfLocalStorage = (tasks: Task[]) => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    const addTask = (task: AddTaskProp) => {
        const newTask: Task = {
            ...task,
            id: tasks.length + 1,
            done: false,
            createdAt: new Date()
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
        updateTasksOfLocalStorage(newTasks)
    }

    const updateStatusTask = (taskId: number, newStatus: boolean) => {
        const newTasks = tasks.map(task => task.id === taskId 
            ? { ...task , done: newStatus }
            : task
        )
        setTasks(newTasks)
        updateTasksOfLocalStorage(newTasks)
    }

    // TODO: Implement `removeTask` function

    const donedTasks = useMemo(() => tasks.filter(task => task.done), [tasks]) 
    const tasksToBeDone = useMemo(() => tasks.filter(task => !task.done), [tasks])

    useEffect(() => { getTasksOfLocalStorage() }, [])

    return {
        addTask,
        donedTasks,
        tasksToBeDone,
        updateStatusTask
    }
}