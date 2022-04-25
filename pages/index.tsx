import type { NextPage } from 'next'
import {Avatar, Button, Center, Container, Grid} from "@mantine/core";
const Index: NextPage = () => {
    // birthday = Date.parse('2013/03/27');
    // age = ~~((Date.now() - birthday) / (31557600000));

    const age = ~~((Date.now() - Date.parse('2004/11/05')) / (31557600000));

  return (
    <>
      <Container style={{minHeight: "85vh", display: "flex", margin: "auto", alignItems: "center"}}>
          <Avatar className={'mr-5'} radius="lg" size="xl" src="https://imgs.search.brave.com/Q1JPL__FReDNKqetfnrYnBMKYs-uB8OwCnE6G55y7LE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGxz/ZGVzay5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDEv/RG9nLWZ1bGwtSEQu/anBn" />
          <div className={'flex-wrap'}>
              <h1 className={'text-2xl'}>Hello I'm Aaron and I'm {age}</h1>
              <p className={'text-lg'}>I'm a small time developer who enjoys working on random projects. I also love nature and watching MacGyver.</p>
              <Grid>
                  <Grid.Col span={2} offset={5}>
                      <Button color={'gray'} variant={'subtle'}>Click Me</Button>
                  </Grid.Col>
              </Grid>
          </div>
      </Container>
    </>
  )
}

export default Index
