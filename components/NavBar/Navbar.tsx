import React,  { FC } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
//styles
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <>
      <Header className={styles.navbar}>Header</Header>
    </>
  )  
}