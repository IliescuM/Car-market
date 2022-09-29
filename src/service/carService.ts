import axios from "axios"
import { Z_UNKNOWN } from "zlib"
import { ICar } from "../types/carTypes/ICar"
import { ICarPagination } from "../types/carTypes/ICarsPagination"
import { ICreateCarReq } from '../types/carTypes/ICreateCarReq'
import { IUpdateCarReq } from "../types/carTypes/IUpdateCarReq"
const axiosInstance = axios.create({
    baseURL: "http://localhost:5004"

})
export const getCars = async () => {
    const { data } = await axiosInstance.get<ICarPagination>("/cars")
    return data.items
}
export const getCar = async (uuid: String) => {
    const { data } = await axiosInstance.get<ICar>(`/cars/${uuid}`)
    return data
}
export const postCar = async (req: ICreateCarReq) => {

    const { data } = await axiosInstance.post<{ items: ICar[] }>('/cars', [req])
    return data
}
export const putCar = async (req: IUpdateCarReq) => {
    const { _uuid, ...rest } = req;

    const { data } = await axiosInstance.put<ICar>(`/cars/${req._uuid}`, rest)
    return data
}
export const deleteCar = async (uuid: String) => {
    const { data } = await axiosInstance.delete<ICar>(`/cars/${uuid}`)
    return data
}
