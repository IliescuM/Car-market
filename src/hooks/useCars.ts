import axios from "axios"
import { useState, useEffect } from "react"
import { getCars } from "../service/carService"
import { ICar } from "../types/carTypes/ICar"
import { ICarPagination } from "../types/carTypes/ICarsPagination"

export const useCars = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        ; (async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const data = await getCars()
                setCars(data)

            } catch (err) {
                setIsError(true)
            }
            setIsLoading(false)
        })()

    }, [])

    return {
        cars,
        isLoading,
        isError
    }
}