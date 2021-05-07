import React  from "react";
import { Row, Col, Layout } from 'antd';

import styles from './loginpage.module.scss'


console.log(styles)

const Login = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={12}>
        <div className={styles.sliderLeft}>
          <p>logo</p>
        </div>
      </Col>  
      <Col span={12}>
        <p>form</p>
      </Col>
    </Row>
  )
}

export default Login;