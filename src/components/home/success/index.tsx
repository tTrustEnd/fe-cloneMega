import React from 'react';
import { Button, Result } from 'antd';

const Success = () => (
    <Result
    style={{margin:'0 auto',height:'100%'}}
        status="success"
        title="Thanh toán thành công"
        subTitle="Khi đến rạp hãy mang theo hóa đơn này nhé!!! <3"
        extra={[
        ]}
    />
);

export default Success;