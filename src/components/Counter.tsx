import { Button, Text } from "@mantine/core"
import { useDispatch } from "react-redux"
import { useCountSelector } from "../hooks/selectors/useCountSelector"
import * as ActionCreators from "../store/counterActionCreators"
export const Counter = () => {
    const dispatch = useDispatch();
    const count = useCountSelector();
    const handleIncrement = () => {
        dispatch(ActionCreators.increment())
    };
    const handleDecrement = () => {
        dispatch(ActionCreators.decrement())
    };
    return <>
        <Button
            mb={20}
            mr={20}
            onClick={handleIncrement}
        >+</Button>
        <Text mb={20}>{count}</Text>
        <Button
            mb={20}
            ml={20}
            onClick={handleDecrement}
        >-</Button>
    </>
}