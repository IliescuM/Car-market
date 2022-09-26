import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const useCountSelector = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    return count

}