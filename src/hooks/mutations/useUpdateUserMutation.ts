import { putUser } from './../../service/userService';
import { userKeyBuilder } from '../../keyBuilders/userKeyBuilder';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
export const useUpdateUserMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(putUser, {
        onSuccess: user => {
            queryClient.invalidateQueries(userKeyBuilder.user(user._uuid))
        }
    })
}