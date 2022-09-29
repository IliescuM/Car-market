import { IUser } from './IUser';

export interface IUserPagination {
    cursor: unknown
    items: IUser[]
    next_page: unknown
}