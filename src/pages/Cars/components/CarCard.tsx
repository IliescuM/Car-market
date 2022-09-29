import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { ICar } from '../../../types/carTypes/ICar';
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
            color={colorScheme === 'dark' ? '#343434' : 'white'}
            shadow='sm'
            p='lg'
            radius='md'
            withBorder
        >
            <Card.Section>
                <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Image


                        src={car.image}
                        height={600}

                        alt='Car'
                    />
                </div>

            </Card.Section>
            <Group position="apart" mt="sm" mb="md">
                <Text size='xl' align="center" weight={800}>{car.name}</Text>
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
            <Text size='xl' color='red' weight={700}> Price: {car.selling_price}</Text>
            <Button variant="light" color="blue" onClick={handleRedirect}>Details</Button>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Buy
            </Button>

        </Card>
    )
}
