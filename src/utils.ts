import {IPost} from "./types";

interface sortForDateFn{
    (arr: IPost[]): IPost[]
}

export const sortForDate: sortForDateFn = (arr) => {
    return [...arr].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
