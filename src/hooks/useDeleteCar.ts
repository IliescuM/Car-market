import { useState, useCallback } from "react"
import { deleteCar, putCar } from "../service/carService"
import { ICar } from "../types/carTypes/ICar"


export const useDeleteCar = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [car, setCar] = useState<ICar>()
    const removeCar = useCallback(async (_uuid: string) => {
        try {
            setIsLoading(true)
            const data = await deleteCar(_uuid)
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
        removeCar,
        car,
    }
}