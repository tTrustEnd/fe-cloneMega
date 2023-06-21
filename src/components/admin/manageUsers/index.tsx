import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber, Pagination, Popconfirm, Table, Typography, message } from 'antd';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';
import { deleteUserSV, getUserSV, sortbyField, updateUserAdminSV } from '../../../service/api';
import { current } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface Item {
    key: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    id: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const Users: React.FC = () => {
    const [form] = Form.useForm();
    const [listUsers, setListUsers] = useState([])
    const originData: Item[] = []
    listUsers.map((user: { _id: string, name: string, email: string, role: string, phone: string }, index) => {
        return (
            originData.push({
                key: index.toString(),
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            })
        )
    });
    const navigate = useNavigate()
    const [data, setData] = useState(originData);
    const [current, setCurent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [editingKey, setEditingKey] = useState('');
    const [query, setQuery] = useState({})

    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            const newData = [...originData];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
            const result = await updateUserAdminSV(newData[index])
            message.success('update thành công')
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const deleteUser = async (key: React.Key) => {
        const newdata = [...originData]
        const index = newdata.findIndex((item) => key === item.key)
        const dataDel = newdata[index];
        const id = dataDel.id
        const result = await deleteUserSV(id)
        console.log(result)
        setListUsers(listUsers)
        navigate(window.location.pathname='/admin/users')
    }

    const onchangeTable = async (pagination: any, filters: any, sorter: any) => {
        if (pagination.current != current) {
            setCurent(pagination.current)
        }
        if (sorter) {
            if (sorter.order === 'ascend') {
                const query = `sort=${sorter.field}`
                const result = await sortbyField(query)
                setListUsers(result.data)
            }
            if (sorter.order === 'descend') {
                const query = `sort=-${sorter.field}`
                const result = await sortbyField(query)
                setListUsers(result.data)
            }

        }
    }



    const getUser = async () => {
        const user = await getUserSV();
        setListUsers(user.data)
    }
    useEffect(() => {
        getUser()
    }, [current, query,data])
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '25%'
        },
        {
            title: 'name',
            dataIndex: 'name',
            width: '15%',
            editable: true,
            sorter: true
        },
        {
            title: 'email',
            dataIndex: 'email',
            width: '15%',
            sorter: true,
        },
        {
            title: 'role',
            dataIndex: 'role',
            width: '15%',
            editable: true,
            sorter: true
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            width: '15%',
            editable: true,
        },
        {
            title: 'Edit',
            width: '10%',
            dataIndex: 'Edit',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Save
                        </Typography.Link>

                        <a onClick={cancel}>Cancel</a>

                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
        {
            title: 'Delete',
            dataIndex: 'Delete',
            render: (_: any, record: { key: React.Key }) => {
                return (
                    <Popconfirm
                        onConfirm={() => deleteUser(record.key)}
                        title="Delete this user ?"
                        description="Are you sure ?"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                )
            },

        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const Search = async (e:any) => {
        // console.log(e.target.value)
        const data = `email=/${e.target.value}/`;
        if(data){
            const result = await sortbyField(data)
            // console.log(result)
            setListUsers(result.data)
        }
    }
    return (
        <div>
            <Form form={form} component={false}>
                <h3>List users </h3>
                <div style={{ display: 'flex' }}>
                    <div style={{ paddingTop: 6, fontSize: 15, paddingRight: 10 }}> Email:</div>
                    <div style={{paddingBottom:25,width:'100%'}}> 
                    <Input
                    placeholder='Bạn tìm ai???'
                        onChange={(e) => Search(e)}
                    />
                    </div>
                   </div>
                <Table
                    onChange={(pagination, filters, sorter) => onchangeTable(pagination, filters, sorter)}
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={originData}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        current: current,
                        pageSize: pageSize,
                        onChange: cancel,
                        showTotal: (total, range) => {
                            return <>{range[0] + '-' + range[1] + '/' + total}</>
                        }
                    }}
                />
            </Form>
        </div>
    );
};

export default Users;