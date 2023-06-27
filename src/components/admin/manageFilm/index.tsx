import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Table, Typography, message } from 'antd';
import { deleteFilmSV, getFilmsByFieldSV, getFilmsSV, updateFilmSV} from '../../../service/api';
import { useNavigate } from 'react-router-dom';

interface Item {
    key: string;
    id: string,
    name: string,
    actor: string,
    director: string,
    premiere: string,
    caterogy: string,
    sub: string,
    sumary: string,
    time: string,
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

const Films: React.FC = () => {
    const [form] = Form.useForm();
    const [listFilms, setListFilm] = useState([])
    const originData: Item[] = []
    listFilms.map(
        (films: {
            _id: string,
            name: string,
            actor: string,
            director: string,
            premiere: string,
            caterogy: string,
            sub: string,
            sumary: string,
            time: string,

        }
            , index) => {
            return (
                originData.push({
                    key: index.toString(),
                    id: films._id,
                    actor: films.actor,
                    director: films.director,
                    premiere: films.premiere,
                    caterogy: films.caterogy,
                    sub: films.sub,
                    sumary: films.sumary,
                    time: films.time,
                    name: films.name
                })
            )
        });
    const navigate = useNavigate()
    const [data, setData] = useState(originData);
    const [current, setCurent] = useState(1);
    const [pageSize, _setPageSize] = useState(5);
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
            const data = { id: newData[index].id, dataUpdate: newData[index] }
            const result = await updateFilmSV(data)
            navigate(window.location.pathname = '/admin/films')
            message.success('update thành công')
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const deleteFilm = async (key: React.Key) => {
        const newdata = [...originData]
        const index = newdata.findIndex((item) => key === item.key)
        const dataDel = newdata[index];
        const id = dataDel.id
        const result = await deleteFilmSV(id)
        setListFilm(listFilms)
        navigate(window.location.pathname = '/admin/films')
    }

    const onchangeTable = async (pagination: any, _filters: any, sorter: any) => {
        if (pagination.current != current) {
            setCurent(pagination.current)
        }
        if (sorter) {
            if (sorter.order === 'ascend') {
                const query = `sort=${sorter.field}`
                const result = await getFilmsByFieldSV(query)
                setListFilm(result.data)
            }
            if (sorter.order === 'descend') {
                const query = `sort=-${sorter.field}`
                const result = await getFilmsByFieldSV(query)
                setListFilm(result.data)
            }

        }
    }



    const getFilm = async () => {
        const films = await getFilmsSV();
        setListFilm(films.data)
    }
    useEffect(() => {
        getFilm()
    }, [current, query, data])
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '10%'
        },
        {
            title: 'name',
            dataIndex: 'name',
            width: '15%',
            editable: true,
            sorter: true
        },
        {
            title: 'caterogy',
            dataIndex: 'caterogy',
            width: '10%',
            sorter: true,
            editable: true,
        },
        {
            title: 'time',
            dataIndex: 'time',
            width: '10%',
            editable: true,
        },
        {
            title: 'premiere',
            dataIndex: 'premiere',
            width: '10%',
            editable: true,
            sorter: true

        },
        {
            title: 'director',
            dataIndex: 'director',
            width: '15%',
            editable: true,
        },
        {
            title: 'actor',
            dataIndex: 'actor',
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
                        onConfirm={() => deleteFilm(record.key)}
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
    const Search = async (e: any) => {
        const data = `name=/${e.target.value}/i`;
        if (data) {
            const result = await getFilmsByFieldSV(data)
            setListFilm(result.data)
        }
    }
    return (
        <div>
            <Form form={form} component={false}>
                <h3>List Films </h3>
                <div style={{ display: 'flex' }}>
                    <div style={{ paddingTop: 6, fontSize: 15, paddingRight: 10 }}> Film:</div>
                    <div style={{paddingBottom:20, width:'100%'}}>
                    <Input placeholder='Bạn tìm film nào???'
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

export default Films;