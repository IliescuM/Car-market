import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import clsx from 'clsx';
import React from 'react'
import { ICar } from '../../../types/ICar';
import { useStyles } from "./style"
import { useNavigate } from "react-router-dom"
import { useColorScheme } from '@mantine/hooks';


interface ICarCardProps {
    car: ICar;
}
export const CarCard = ({ car }: ICarCardProps) => {
    const colorScheme = useColorScheme();
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate(`/cars/${car._uuid}`)
    }
    return (
        <Card
            color={colorScheme === 'dark' ? 'x#343434' : 'white'}
            shadow='sm'
            p='lg'
            radius='md'
            withBorder
        >
            <Card.Section>
                <Image


                    src='https://images.unsplash.com/photo-1591280790477-41b015ef12b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    height={600}

                    alt='Car'
                />

            </Card.Section>
            <Group position="apart" mt="sm" mb="md">
                <Text align="center" weight={500}>{car.name}</Text>
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
            <Text color='red' weight={700}> Price: {car.selling_price}</Text>
            <Button variant="light" color="blue" onClick={handleRedirect}>Details</Button>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Buy
            </Button>

        </Card>
    )
}
