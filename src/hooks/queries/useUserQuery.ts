import { getUser } from './../../service/userService';
import { userKeyBuilder } from '../../keyBuilders/userKeyBuilder';
import { useQuery } from '@tanstack/react-query';
export const useUserQuery = (uuid: string) => {
    return useQuery(userKeyBuilder.user(uuid), () => getUser(uuid))
}