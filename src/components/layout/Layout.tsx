import { Navigation } from "../Navigation";
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { Header } from "./Header";



export const Layout = () => {
    return (
        <div>

            <AppShell
                padding="md"
                navbar={<Navigation />}
                header={<Header />}
                styles={(theme) => ({
                    main: {
                        backgroundColor: theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0]
                    },
                })}

            > <Outlet /> </AppShell>
        </div>
    )
}