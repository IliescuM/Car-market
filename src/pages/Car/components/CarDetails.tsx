import { Badge, Button, Card, Center, Group, Image, Paper, Text, Title } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import clsx from "clsx"
import React from "react"
import { ICar } from "../../../types/ICar"
import { useStyles } from "./style"


interface ICarDetailsProps {
    car: ICar
}

export const CarDetails = ({ car }: ICarDetailsProps) => {
    const { classes } = useStyles()
    const colorScheme = useColorScheme();
    return (
        <div >

            <Card
                className={clsx(classes.carCard, true && classes.carCard2, classes)}
                shadow='sm'
                color={colorScheme === 'dark' ? '#343434' : 'white'}
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
                    <Title order={1} size='xl' align="center" weight={800}>{car.name}</Title>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                </Group>

                <Text size='xl' color="dimmed"> Year: {car.year}</Text>
                <Text size='xl' color="dimmed"> Km Driven: {car.km_driven}</Text>
                <Text size='xl' color="dimmed"> Fuel: {car.fuel}</Text>
                <Text size='xl' color="dimmed"> Seller Type: {car.seller_type}</Text>
                <Text size='xl' color="dimmed"> Transmission: {car.transmission}</Text>
                <Text size='xl' color="dimmed"> Owner: {car.owner}</Text>
                <Text size="xl" color='red' weight={700}> Price: {car.selling_price} $</Text>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    Buy
                </Button>
            </Card >
        </div>

    )
}