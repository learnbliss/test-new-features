import {IPost} from "./types";

interface sortForDateFn {
    (arr: IPost[]): IPost[]
}

export const sortForDate: sortForDateFn = (arr) => {
    return [...arr].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const capitalizeFirstLetter = (string: string) => string.substring(0, 1).toUpperCase() + string.slice(1);
