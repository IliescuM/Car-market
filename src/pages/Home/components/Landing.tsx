import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode, IconCar } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

const features = [
    {
        icon: IconReceiptOff,
        title: 'Free use and easy to buy',
        description: 'All cars are published under  license, you can buy cars in any country.',
    },
    {
        icon: IconCar,
        title: 'Car check',
        description: 'Before a vehicle is listed, it is extensively inspected.',
    },
    {
        icon: IconCircleDotted,
        title: 'No annoying paperwork',
        description:
            'Buying a car is now easier than ever thanks to new document processing software.',
    },
    {
        icon: IconFlame,
        title: 'Flexible',
        description:
            'With a diverse choice of cars, you may customize the color, engine, gearbox type, and many other options.',
    },
];

export function Landing() {
    const { classes } = useStyles();

    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            >
                <feature.icon size={26} stroke={1.5} />
            </ThemeIcon>
            <Text size="lg" mt="sm" weight={500}>
                {feature.title}
            </Text>
            <Text color="dimmed" size="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
                <Col span={12} md={5}>
                    <Title className={classes.title} order={2}>
                        The revolution in car dealership
                    </Title>
                    <Text color="dimmed">
                        Car Market is Germany's largest vehicle market with around 1.5 million advertised cars,
                        commercial vehicles and motorcycles and around 16.9 million individual users per month
                    </Text>

                    <Button
                        variant="gradient"
                        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                        size="lg"
                        radius="md"
                        mt="xl"
                    >
                        Start now
                    </Button>
                </Col>
                <Col span={12} md={7}>
                    <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {items}
                    </SimpleGrid>
                </Col>
            </Grid>
        </div>
    );
}