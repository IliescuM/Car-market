import { putCar } from './../../service/carService';
import { keyBuilder } from './../../keyBuilder';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
export const useUpdateCarMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(putCar, {
        onSuccess: car => {
            queryClient.invalidateQueries(keyBuilder.car(car._uuid))
        }
    })
}