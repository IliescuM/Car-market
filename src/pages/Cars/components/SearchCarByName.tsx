import { TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCarFilterByNameSelector } from "../../../hooks/selectors/useCarFilterByNameSelector";
import { useCarSelector } from "../../../hooks/selectors/useCarSelector";
import { useSearchSelector } from "../../../hooks/selectors/useSearchSelector";
import { setSearchByName } from "../../../store/carsSlice";

export const SearchCar = () => {
    const search = useSearchSelector();
    const dispatch = useDispatch();

    return (
        <div>
            <TextInput
                onChange={(e) => dispatch(setSearchByName(e.currentTarget.value))}
                sx={{ width: 250, position: 'absolute', top: 0, right: 0 }}
                mt={60}
                placeholder="Search Car"
                value={search}
                icon={<IconSearch size={14} />}>

            </TextInput>
        </div>
    )
}