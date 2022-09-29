import { ActionIcon, Box, Burger, Button, Group, Header as HeaderMantine, MediaQuery, Modal, useMantineColorScheme } from "@mantine/core"
import { IconMoonStars, IconSun } from "@tabler/icons";
import { useState } from "react";
import { Logo } from "../Logo";
import { AuthenticationForm } from "./Authentication";

export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const [opened, setOpened] = useState(false);

    const handleClick = () => {

    }

    return (

        <Group position="apart" sx={{ height: '100%' }}>
            <Logo width={45} height={45} ></Logo>
            This is the Header
            < Group position="center" grow pb="xl" px="md" >
                <Button disabled={!localStorage.getItem("user")} onClick={() => setOpened(true)} variant="default">Connect</Button>
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Authentication">
                    <AuthenticationForm></AuthenticationForm>

                </Modal>

            </Group >

            <ActionIcon
                mt={10}
                sx={{ position: 'absolute', top: 0, right: 0 }}
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
        </Group >

    )
}

