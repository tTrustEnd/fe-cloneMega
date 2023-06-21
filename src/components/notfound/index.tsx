import React from 'react';
import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';

const NotFound: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><NavLink to='/'>Home</NavLink> </Button>}
  />
);

export default NotFound