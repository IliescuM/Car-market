import { ICar } from "./ICar"

export interface ICarPagination {
    cursor: unknown
    items: ICar[]
    next_page: unknown
}