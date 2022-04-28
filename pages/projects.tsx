import { NextPage } from "next";
import Head from "next/head";
import {Container} from "@mantine/core";
import axios from "axios";

const Projects: NextPage = () => {

    const data = axios.get('https://api.github.com/users/MistyyBoi/repos', {
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    }).then((r) => r.data)

    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Misty's Portfolio | Projects</title>
            </Head>

            <Container style={{minHeight: "85vh", display: "flex", margin: "auto", alignItems: "center"}}>
                <div>
                    Well I am trying to get data fetching to work with next but I am dumb
                </div>
            </Container>
        </>
    )
}
export default Projects;