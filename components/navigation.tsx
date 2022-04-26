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

    const pages = ['home','about']
    let pageLink = []
    for(const page of pages) {
        if(page === "home"){
            pageLink.push(
                <Link key={page} href={'/'}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
            )
        } else {
            pageLink.push(
                <Link key={page} href={`/${page}`}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
            )
        }
    }
    return (
        <>
        <nav>
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
                    <div
                        className={"flex flex-col items-center min-h-screen text-xl"}
                    >
                        {pageLink}
                    </div>
                </Drawer>
        </>
    )
}

export default Navigation