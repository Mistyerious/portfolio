import { NextPage } from "next";
import { useEffect, useState } from 'react'
import { Anchor, Burger, Drawer } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from "next/router";
const Navigation: NextPage = () => {

    const [opened, setOpened] = useState(false)

    const router = useRouter()
    
    useEffect(() => {
        const handleRouteChange = () => {
            setOpened(false)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

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
                closeButtonLabel="Close drawer"
                >
                    <Anchor component={Link} href="/about">About</Anchor>
                </Drawer>
        </>
    )
}

export default Navigation