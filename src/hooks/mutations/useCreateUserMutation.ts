import { postUser } from './../../service/userService';
import { userKeyBuilder } from '../../keyBuilders/userKeyBuilder';
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateUserMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(postUser, {
        onSuccess: () => {
            queryClient.invalidateQueries(userKeyBuilder.users())


        }
    })
}