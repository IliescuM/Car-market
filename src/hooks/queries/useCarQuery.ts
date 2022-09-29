import { carKeyBuilder } from '../../keyBuilders/carKeyBuilder';
import { getCar } from '../../service/carService';
import { useQuery } from '@tanstack/react-query';
export const useCarQuery = (uuid: string) => {
    return useQuery(carKeyBuilder.car(uuid), () => getCar(uuid))
}