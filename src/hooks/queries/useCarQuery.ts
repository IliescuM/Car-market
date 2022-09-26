import { keyBuilder } from '../../keyBuilder';
import { getCar } from '../../service/carService';
import { useQuery } from '@tanstack/react-query';
export const useCarQuery = (uuid: string) => {
    return useQuery(keyBuilder.car(uuid), () => getCar(uuid))
}