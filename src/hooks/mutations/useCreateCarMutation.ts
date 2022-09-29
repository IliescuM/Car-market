import { carKeyBuilder } from '../../keyBuilders/carKeyBuilder';
import { postCar } from '../../service/carService';
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateCarMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(postCar, {
        onSuccess: () => {
            queryClient.invalidateQueries(carKeyBuilder.cars())

        }
    })
}