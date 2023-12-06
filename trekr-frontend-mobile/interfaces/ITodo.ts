interface ITodo {
    id: string,
    date: string,
    type: string,
    team: string,
    tasks: Array<Object>
}

export type { ITodo as default };