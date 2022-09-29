import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    ActionIcon,
    useMantineColorScheme,
    Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconSun,
    IconMoonStars,
} from '@tabler/icons';
import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Logo } from '../Logo';
import { AuthenticationForm } from './Authentication';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

// const mockdata = [
//     {
//         icon: IconCode,
//         title: 'Open source',
//         description: 'This Pokémon’s cry is very loud and distracting',
//     },
//     {
//         icon: IconCoin,
//         title: 'Free for everyone',
//         description: 'The fluid of Smeargle’s tail secretions changes',
//     },
//     {
//         icon: IconBook,
//         title: 'Documentation',
//         description: 'Yanma is capable of seeing 360 degrees without',
//     },
//     {
//         icon: IconFingerprint,
//         title: 'Security',
//         description: 'The shell’s rounded shape and the grooves on its.',
//     },
//     {
//         icon: IconChartPie3,
//         title: 'Analytics',
//         description: 'This Pokémon uses its flying ability to quickly chase',
//     },
//     {
//         icon: IconNotification,
//         title: 'Notifications',
//         description: 'Combusken battles with the intensely hot flames it spews',
//     },
// ];

export function PremadeHeader() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const [opened, setOpened] = useState(false);
    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user")
        nav("/home");

    }

    return (
        <Box pb={120}>
            <Header height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>


                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <Logo width={40} height={40}></Logo>
                        <a href="http://localhost:3000/home" className={classes.link}>
                            Home
                        </a>
                    </Group>

                    <Group className={classes.hiddenMobile} >
                        <Button disabled={!!localStorage.getItem("user")} onClick={() => setOpened(true)} variant="default">Connect</Button>
                        <Button disabled={!localStorage.getItem("user")} onClick={() => handleLogout()} variant="default">Logout</Button>
                        <Modal
                            opened={opened}
                            onClose={() => setOpened(false)}
                            title="Authentication">
                            <AuthenticationForm></AuthenticationForm>

                        </Modal>
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Menu"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="/home" className={classes.link}>
                        Home
                    </a>
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                    <a href="/cars" className={classes.link}>
                        Cars
                    </a>
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                    <a href="/about" className={classes.link}>
                        Home
                    </a>
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                    <Group position="center" grow pb="xl" px="md">

                        <Button disabled={!localStorage.getItem("user")} onClick={() => setOpened(true)} variant="default">Connect</Button>
                        <Modal
                            opened={opened}
                            onClose={() => setOpened(false)}
                            title="Authentication">
                            <AuthenticationForm></AuthenticationForm>

                        </Modal>


                        <ActionIcon
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>

                    </Group>
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />


                </ScrollArea>
            </Drawer>
        </Box>
    );
}