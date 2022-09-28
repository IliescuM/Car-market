import { createStyles, Text, Container, ActionIcon, Group, Image, Affix, Transition, Button, Anchor, Center } from '@mantine/core';
import { useColorScheme, useWindowScroll } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconArrowUp, IconArrowUpCircle, IconArrowDownCircle } from '@tabler/icons';
import { Logo } from '../Logo';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 60,
        paddingTop: theme.spacing.xs * 2,
        paddingBottom: theme.spacing.xs * 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}));

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}

export function PremadeFooterLinks({ data }: FooterLinksProps) {
    const [scroll, scrollTo] = useWindowScroll();
    const colorScheme = useColorScheme();


    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Anchor
                className={classes.link}
                size="sm"
                href={link.link}
                target="_blank">
                {link.label}
            </Anchor>

            // <Text<'a'>
            //     key={index}
            //     className={classes.link}
            //     component="a"
            //     href={link.link}
            //     onClick={(event) => event.preventDefault()}


            // >
            //     {link.label}
            // </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Group>

                        <Logo width={75} height={75}></Logo>
                        <Text className={classes.title}>Car Market</Text>
                        <Text size="xs" color="dimmed" className={classes.description}>
                            Buy cars faster than ever
                        </Text>
                    </Group>

                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2022 Car Market. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon component="a" size="lg" href="https://twitter.com/">
                        <IconBrandTwitter size={18} stroke={1.5} />

                    </ActionIcon>
                    <ActionIcon component="a" size="lg" href="https://www.youtube.com/">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon component="a" size="lg" href="https://www.instagram.com/?hl=en">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>

            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Center>
                            <ActionIcon
                                color={colorScheme}
                                radius="xl"
                                style={transitionStyles}
                                onClick={() => scrollTo({ y: 0 })}
                                size={50}
                            >
                                <IconArrowUpCircle size={200} />
                            </ActionIcon>
                        </Center>
                    )}
                </Transition>
            </Affix>

        </footer >
    );
}
