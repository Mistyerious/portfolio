import type { NextPage } from 'next'
import {Avatar, Button, Center, Container, Grid} from "@mantine/core";
import { motion } from 'framer-motion'
import Link from 'next/link';
const Index: NextPage = () => {

    const age = ~~((Date.now() - Date.parse('2004/11/05')) / (31557600000));

  return (
    <>
      <Container style={{minHeight: "85vh", display: "flex", margin: "auto", alignItems: "center"}}>
          <div>
          <Grid className='mb-5'>
              <Grid.Col span={2} offset={5}>
                <Avatar className={'mr-5'} radius="lg" size="xl" src="https://imgs.search.brave.com/Q1JPL__FReDNKqetfnrYnBMKYs-uB8OwCnE6G55y7LE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGxz/ZGVzay5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDEv/RG9nLWZ1bGwtSEQu/anBn" />
              </Grid.Col>
            </Grid>
              <h1 className={'text-2xl text-center'}>Hello I'm Aaron and I'm <motion.span>{age}</motion.span></h1>
              <p className={'text-lg'}>I'm a novice developer who enjoys working on random projects. I also love nature and watching MacGyver.</p>
              <br />
              <hr />
              <Grid className='mt-2'>
                <Grid.Col span={2} offset={5}>
                  <h1>Quick Access</h1>
                </Grid.Col>
                <Grid.Col span={2} offset={5}>
                  <Link href={'/about'}><Button component={motion.button} whileHover={{ scale: 1.3 }} color='gray'>About Me</Button></Link>
                </Grid.Col>
                  <Grid.Col span={2} offset={5}>
                  <Link href={'#'}><Button component={motion.button} whileHover={{ scale: 1.3 }} color='gray'>Projects</Button></Link>
                  </Grid.Col>
              </Grid>
          </div>
      </Container>
    </>
  )
}

export default Index
