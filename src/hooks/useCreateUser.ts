import { postUser } from './../service/userService';
import { ICreateUserReq } from './../types/userTypes/ICreateUserReq';
import { useCallback, useState } from "react"
import { IUser } from '../types/userTypes/IUser';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { useUserSelector } from './selectors/useUserSelector';

export const useCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const dispatch = useDispatch();

    const createUser = useCallback(async (req: ICreateUserReq) => {
        try {
            setIsLoading(true)
            const data = await postUser(req)
            // setUser(data.items[0])
            dispatch(setUser(data.items[0]))
            setIsError(false)
        } catch (err) {
            setIsError(true)
        }
        setIsLoading(false)
    }, [])
    const users = useUserSelector();
    return {
        isLoading,
        isError,
        createUser,
        users,
    }
}


