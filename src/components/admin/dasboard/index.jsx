import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatterCount = (value) => <CountUp end={value} separator="," />;

const Dasboard= () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={100} formatter = {formatterCount}
 />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter = {formatterCount} />
    </Col>
  </Row>
);

export default Dasboard;