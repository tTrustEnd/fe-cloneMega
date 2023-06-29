import React from 'react';
import { Button, Result, message } from 'antd';

const ThatBai = () => (
    <Result
    style={{margin:'0 auto',height:'100%'}}
        status="warning"
        title="Thanh toán thất bại @@"
        subTitle="Có sự cố xảy ra trong quá trình thanh toán"
        extra={[<button className='btn btn-warning' onClick={()=>message.success('Thôi bạn tự quay lại đi')}>Quay lại trang mua vé?</button>
        ]}
    />
);

export default ThatBai;