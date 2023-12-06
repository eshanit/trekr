interface  ITeamMember {
    readonly _id: string,
    readonly firstname: string,
    readonly lastname: string,
    readonly gender: string,
    readonly email: string,
    readonly dateJoined: string,
    readonly teams: Array<Object>,
    readonly todos: Array<Object>,
    readonly mobileAcess: string,
    readonly createdAt: number

}

export type { ITeamMember as default };