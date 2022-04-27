import { NextPage } from "next";
import Head from "next/head";
import {Card, Container, Grid, Group, Image, Text} from "@mantine/core";

const About: NextPage = () => {
    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Misty's Portfolio | About</title>
            </Head>

            <Container style={{minHeight: "85vh", display: "flex", margin: "auto", alignItems: "center"}}>
                <Grid
                    grow
                    gutter={'xs'}
                >
                    <Grid.Col
                        lg={4}
                        sm={2}
                    >
                        <Card radius={'md'} shadow={'md'} p={'lg'}>
                            <Card.Section>
                                <Text className={'text-center text-2xl'}>Skills</Text>
                            </Card.Section>
                            <hr style={{borderTop: "2px #4B4E58"}}/>
                            <Group>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <Text size={'lg'}>Hello there, I'm Aaron Dye (Jr)</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col
                        lg={4}
                        sm={2}
                    >
                        <Card radius={'md'} shadow={'md'} p={'lg'}>
                            <Group>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <Text size={'lg'}>Hello there, I'm Aaron Dye (Jr)</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col
                        lg={4}
                        sm={2}
                    >
                        <Card radius={'md'} shadow={'md'} p={'lg'}>
                            <Group>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <Text size={'lg'}>Hello there, I'm Aaron Dye (Jr)</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col
                        sm={2}
                        lg={4}
                    >
                        <Card radius={'md'} shadow={'md'} p={'lg'}>
                            <Group>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <Text size={'lg'}>Hello there, I'm Aaron Dye (Jr)</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}
export default About;