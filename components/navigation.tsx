import { NextPage } from "next";
import { useState } from 'react'
import { Burger, Drawer } from '@mantine/core'
const Navigation: NextPage = () => {

    const [opened, setOpened] = useState(false)

    return (
        <>
        <nav className="flex">
                <Burger 
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                className="text-3xl"
                />
        </nav>
                <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                >
                    <h1>Hello Drawer</h1>
                </Drawer>
        </>
    )
}

export default Navigation