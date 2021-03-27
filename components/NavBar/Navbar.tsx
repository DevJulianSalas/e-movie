import React,  { FC } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import { Button, Row, Col } from 'antd';
import { useRouter } from 'next/router'


import brandLogo from '../../public/vercel.svg'
import Image from "next/image";

//styles
import styles from './NavBar.module.scss';


export default function NavBar() {
  const router = useRouter()
  return (
    <>
      <Header className={styles.navbar}>
        <Row  justify="start">
          <Col span={22}>
            <p>logo</p>
          </Col>
          <Col>
          <Button  onClick={() => router.push('/login')} type="primary">Ingreso</Button>
          </Col>
        </Row>
      </Header>
    </>
  )  
}