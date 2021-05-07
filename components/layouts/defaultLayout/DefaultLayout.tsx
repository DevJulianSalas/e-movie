import React from 'react';
import { Layout } from 'antd';

//styles

const { Header, Footer, Content } = Layout;


export default function DefaultLayout({children}: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}