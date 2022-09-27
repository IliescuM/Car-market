import { Navigation } from "../Navigation";
import { Outlet } from "react-router-dom";
import { AppShell, useMantineTheme, Header as HeaderMantine, MediaQuery, Burger, Navbar } from "@mantine/core";
import { Header } from "./Header";
import { useState } from "react";
import { Footer } from "./Footer";



export const Layout = () => {
    const themeLayout = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <div>

            <AppShell
                styles={{
                    main: {
                        backgroundColor: themeLayout.colorScheme === 'dark'
                            ? themeLayout.colors.dark[6]
                            : themeLayout.colors.gray[0]
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                padding="md"
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                        <Navigation></Navigation>
                    </Navbar>
                }
                header={
                    <HeaderMantine height={60} p="xs">
                        <div style={{ display: 'flex', alignItems: 'center', height: "100%" }}>
                            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={themeLayout.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            <Header></Header>

                        </div>
                    </HeaderMantine>
                }
                footer={<Footer />}


            > <Outlet /> </AppShell>
        </div >
    )
}