import { Alert, Button, Center, Group, Loader, Modal } from "@mantine/core"
import { IconAlertCircle, IconCheck } from "@tabler/icons"
import { monitorEventLoopDelay } from "perf_hooks"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import { useCar } from "../../hooks/useCar"
import { useCarQuery } from "../../hooks/queries/useCarQuery"
import { CarDetails } from "./components/CarDetails"
import { DeleteCar } from "./components/DeleteCar"
import { UpdateCar } from "./components/UpdateCar"

export const Car = () => {
    const { uuid } = useParams()
    // const { car, isError, isLoading } = useCar(uuid || '')
    const { isLoading, isError, data: car } = useCarQuery(uuid || "");
    const [opened, setOpened] = useState(false);
    if (isLoading || !car) {
        return <Center>
            <Loader size="xl" />
        </Center>
    }
    if (isError) {
        return <div>
            <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
            </Alert>
        </div>

    }

    return <div>
        {""}

        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create new Car"
            >
                {/* Modal content */}
                <UpdateCar car={car} />
            </Modal>
            <Group position="center">
                <Button mb={20} onClick={() => setOpened(true)}>Update Car</Button>
                <DeleteCar uuid={car._uuid} />
            </Group>

            <CarDetails car={car} /> {""}
        </div>
    </div>
}