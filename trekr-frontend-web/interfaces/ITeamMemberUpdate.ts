import type ITeamMember from "./ITeamMember";

interface ITeamMemberUpdate extends ITeamMember {
    _rev: string,
    updatedAt: number
}

export type { ITeamMemberUpdate as default };