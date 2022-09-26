import { useEffect, useState } from "react"
import { getCar } from "../service/carService"
import { ICar } from "../types/ICar"

export const useCar = (uuid: string) => {
    const [car, setCar] = useState<ICar>()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(
        () => {

            ; (async () => {
                try {
                    setIsLoading(true)
                    setIsError(false)
                    const data = await getCar(uuid)
                    setCar(data)
                }
                catch (err) {
                    setIsError(true)
                }
                setIsLoading(false)
            })()
        }, [uuid]
    )
    return {
        car,
        isLoading,
        isError
    }
}