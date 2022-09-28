import { Badge, Button, Card, Center, Group, Image, Paper, Text, Title } from "@mantine/core"
import clsx from "clsx"
import React from "react"
import { ICar } from "../../../types/ICar"
import { useStyles } from "./style"


interface ICarDetailsProps {
    car: ICar
}

export const CarDetails = ({ car }: ICarDetailsProps) => {
    const { classes } = useStyles()
    return (
        <div >

            <Paper
                className={clsx(classes.carCard, true && classes.carCard2, classes)}
                shadow='sm'
                p='lg'
                radius='xs'
                withBorder>


                <Image

                    src={car.image}
                    alt='Car'
                    height={500}
                    width={500}

                />
                <Group position="apart" mt="sm" mb="md">
                    <Title order={1} size="xl" align="center" weight={700}>{car.name}</Title>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                </Group>

                <Text size='sm' color="dimmed"> Year: {car.year}</Text>
                <Text size='sm' color="dimmed"> Km Driven: {car.km_driven}</Text>
                <Text size='sm' color="dimmed"> Fuel: {car.fuel}</Text>
                <Text size='sm' color="dimmed"> Seller Type: {car.seller_type}</Text>
                <Text size='sm' color="dimmed"> Transmission: {car.transmission}</Text>
                <Text size='sm' color="dimmed"> Owner: {car.owner}</Text>
                <Text color='red' weight={700}> Price: {car.selling_price} $</Text>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    Buy
                </Button>
            </Paper >
        </div>

    )
}