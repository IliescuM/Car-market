import { Autocomplete, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCarSelector } from "../../../hooks/selectors/useCarSelector";
import { useSearchSelector } from "../../../hooks/selectors/useSearchSelector";
import { setSearchByName } from "../../../store/carsSlice";

export const SearchCar = () => {
    const search = useSearchSelector();
    const dispatch = useDispatch();
    const cars = useCarSelector();
    const carsNames = cars.map(car => car.name
    )


    return (
        <div>
            <Autocomplete
                onChange={(e) => dispatch(setSearchByName(e))}
                sx={{ width: 250, position: 'absolute', top: 0, right: 0 }}
                mt={60}
                placeholder="Search Car"
                value={search}
                data={carsNames}
                icon={<IconSearch size={14} />}>


            </Autocomplete>
        </div>
    )
}