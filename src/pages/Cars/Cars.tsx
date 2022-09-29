import { Alert, Button, Center, Grid, Group, Loader, Modal, Text, TextInput } from "@mantine/core"
import { IconAlertCircle, IconCheck, IconSearch } from "@tabler/icons"
import { useState } from "react"
import { useCarsQuery } from "../../hooks/queries/useCarsQuery"
import { useCarFilterByNameSelector } from "../../hooks/selectors/useCarFilterByNameSelector"
import { useCarSelector } from "../../hooks/selectors/useCarSelector"
import { CarCard } from "./components/CarCard"
import { CreateCar } from "./components/CreateCar/CreateCar"
import { SearchCar } from "./components/SearchCarByName"

export const Cars = () => {
    //const { isLoading, isError, cars } = useCars()
    const [opened, setOpened] = useState(false);
    const { isLoading, isError, data: cars } = useCarsQuery()
    const carsRedux = useCarSelector();
    const filteredCars = useCarFilterByNameSelector();


    if (isLoading) {
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

        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create new Car"
            >
                {/* Modal content */}
                <CreateCar></CreateCar>
            </Modal>
            <SearchCar />

            <Group position="center">
                <Button mb={20} onClick={() => setOpened(true)}>Add Car</Button>
            </Group>
        </div >
        <Grid sx={{ gridAutoRows: "1fr" }} gutter="xl">
            {filteredCars.map((car) => (
                <Grid.Col sm={4} md={4} key={car._uuid}>
                    <CarCard car={car} />
                </Grid.Col>
            ))}
        </Grid>
    </div >
}