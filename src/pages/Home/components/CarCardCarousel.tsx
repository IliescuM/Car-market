import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, Badge, Center, Loader, Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconAlertCircle } from '@tabler/icons';
import { useCarsQuery } from '../../../hooks/queries/useCarsQuery';

const useStyles = createStyles((theme) => ({
    card: {
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    carName: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.black,
        lineHeight: 1.2,
        fontSize: 32,
        marginTop: theme.spacing.xs,
    },

    selling_price: {
        color: theme.black,
        opacity: 1,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

interface CardProps {
    carName: string;
    image: string;
    selling_price: number;
    uuid: string
}

function Card({ image,
    selling_price,
    carName,
    uuid }: CardProps) {
    const { classes } = useStyles();
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate(`/cars/${uuid}`)
    }
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.selling_price} size="xs">
                    Price: {selling_price}$
                </Text>
                <Title order={3} className={classes.carName}>
                    {carName}
                </Title>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </div>
            <Button onClick={() => handleRedirect()} variant="white" color="dark" >
                Details
            </Button>
        </Paper >
    );
}


export function CarCardCarousel() {

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const { isLoading, isError, data: cars } = useCarsQuery();
    if (isLoading || !cars) {
        return <div>


            <Center>
                <Loader size="xl" />
            </Center>
        </div>
    }
    if (isError) {
        return <div>
            <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
            </Alert>
        </div>

    }
    const slides = cars.map((car) => (
        <Carousel.Slide key={car.name}>
            <Card carName={car.name} image={car.image} selling_price={car.selling_price} uuid={car._uuid} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}