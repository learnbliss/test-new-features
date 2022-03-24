import {IPost} from "./types";

interface sortForDateFn {
    (arr: IPost[]): IPost[]
}

export const sortForDate: sortForDateFn = (arr) => {
    return [...arr].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

interface capitalizeLetterObj {
    [key: string]: string
}

export const capitalizeFirstLetter = (string: string) => string.slice(0, 1).toUpperCase() + string.slice(1);
export const capitalizeFirstLetterInObj = (obj: capitalizeLetterObj) => {
    return Object.keys(obj).reduce((acc, item) => {
        acc = {...acc, [item]: capitalizeFirstLetter(obj[item])}
        return acc
    }, {})
}
