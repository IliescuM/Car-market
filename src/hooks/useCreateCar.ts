import { useCallback, useState } from "react"
import { postCar } from "../service/carService"
import { ICar } from "../types/carTypes/ICar"
import { ICreateCarReq } from "../types/carTypes/ICreateCarReq"

export const useCreateCar = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [car, setCar] = useState<ICar>()
    const createCar = useCallback(async (req: ICreateCarReq) => {
        try {
            setIsLoading(true)
            const data = await postCar(req)
            setCar(data.items[0])
            setIsError(false)
        } catch (err) {
            setIsError(true)
        }
        setIsLoading(false)
    }, [])
    return {
        isLoading,
        isError,
        createCar,
        car,
    }
}