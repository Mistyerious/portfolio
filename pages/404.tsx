import {NextPage} from "next";
import {Center, Container} from "@mantine/core";

const ErrorPage: NextPage = () => {
    return (
        <>
            <Container style={{minHeight: "85vh", display: "flex", margin: "auto", justifyContent: "center", alignItems: "center"}}>
                <Center>
                    <h1 className="text-7xl">404</h1>
                </Center>
            </Container>
        </>
    )
}

export default ErrorPage;