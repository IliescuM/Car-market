import { IUserPagination } from './../types/userTypes/IUserPagination';
import axios from "axios"
import { IUser } from '../types/userTypes/IUser';
import { IUpdateUserReq } from '../types/userTypes/IUpdateUserReq';
import { ICreateUserReq } from '../types/userTypes/ICreateUserReq';
const axiosInstance = axios.create({
    baseURL: "http://localhost:5004"

})
export const getUsers = async () => {
    const { data } = await axiosInstance.get<IUserPagination>("/users")
    return data.items
}
export const getUser = async (uuid: String) => {
    const { data } = await axiosInstance.get<IUser>(`/user/${uuid}`)
    return data
}
export const postUser = async (req: ICreateUserReq) => {
    const { data } = await axiosInstance.post<{ items: IUser[] }>('/users', [req])
    return data
}
export const putUser = async (req: IUpdateUserReq) => {
    const { _uuid, ...rest } = req;

    const { data } = await axiosInstance.put<IUser>(`/user/${req._uuid}`, rest)
    return data
}
export const deleteUser = async (uuid: String) => {
    const { data } = await axiosInstance.delete<IUser>(`/users/${uuid}`)
    return data
}
