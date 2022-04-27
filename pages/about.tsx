import { NextPage } from "next";
import Head from "next/head";
import {Accordion, Card, CardSection, Container, Grid, Group, Text} from "@mantine/core";

const About: NextPage = () => {
    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Misty's Portfolio | About</title>
            </Head>

            <Container style={{minHeight: "85vh", display: "flex", margin: "auto", justifyContent: 'center', alignItems: "center"}}>
                <div>
                    <Accordion style={{width: '40rem'}}>
                        <Accordion.Item label={'Skills'}>
                            <Text>I have no skills I am dumb</Text>
                        </Accordion.Item>
                        <Accordion.Item label={'Contact Info'}>
                            <Text>I have no contact info I am too poor</Text>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
        </>
    )
}
export default About;