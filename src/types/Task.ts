import { Category } from "./Category";

export type Task = {
    id: number;
    name: string;
    category: Category;
    done: boolean;
    createdAt?: Date;
}