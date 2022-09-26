import { putCar } from './../../service/carService';
import { keyBuilder } from './../../keyBuilder';
import { useQueryClient } from '@tanstack/react-query';
import { IUpdateCarReq } from '../../types/IUpdateCarReq';
import { useMutation } from '@tanstack/react-query';
import { postCar } from '../../service/carService';
export const useUpdateCarMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(putCar, {
        onSuccess: car => {
            queryClient.invalidateQueries(keyBuilder.car(car._uuid))
        }
    })
}