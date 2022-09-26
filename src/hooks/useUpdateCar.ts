import { useCallback, useState } from "react"
import { postCar, putCar } from "../service/carService"
import { ICar } from "../types/ICar"
import { ICreateCarReq } from "../types/ICreateCarReq"
import { IUpdateCarReq } from "../types/IUpdateCarReq"

export const useUpdateCar = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [car, setCar] = useState<ICar>()
    const updateCar = useCallback(async (req: IUpdateCarReq) => {
        try {
            setIsLoading(true)
            const data = await putCar(req)
            setCar(data)
            setIsError(false)
        } catch (err) {
            setIsError(true)
        }
        setIsLoading(false)
    }, [])
    return {
        isLoading,
        isError,
        updateCar,
        car,
    }
}