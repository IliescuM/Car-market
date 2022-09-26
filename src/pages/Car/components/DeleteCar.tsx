import { Button } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { useDeleteCar } from "../../../hooks/useDeleteCar"
import { IDeleteCar } from "../../../types/IDeleteCar"

export const DeleteCar = (uuid: IDeleteCar) => {
    const { isLoading, isError, removeCar, car } = useDeleteCar()
    const navigate = useNavigate();
    const handleDelete = async () => {
        await removeCar(uuid.uuid);
        !isError && navigate("/cars", { state: { alertDelete: true } });


    }
    return <Button onClick={handleDelete} mb={20}>Delete</Button>
}