import { putCar } from './../../service/carService';
import { carKeyBuilder } from '../../keyBuilders/carKeyBuilder';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
export const useUpdateCarMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(putCar, {
        onSuccess: car => {
            queryClient.invalidateQueries(carKeyBuilder.car(car._uuid))
        }
    })
}