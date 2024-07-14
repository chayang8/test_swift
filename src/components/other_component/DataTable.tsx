// src/components/DataTable.js
import React from 'react';
import { useAppDispatch, useAppSelector } from './HookType'
import { editData } from '../../store/Reducer2'
import { deleteData,clearFormData } from '../../store/Reducer'
import { Button, Table } from 'antd';
import { DataUser } from '../../store/Reducer';
import './DataTable.css' ;
const DataTable = (props:any) => {
  const { t } = props
  const formData = useAppSelector((state) => state.reducerform);
  const editDatas = useAppSelector((state) => state.reduceredit);
  console.log(editDatas)
  const dispatch = useAppDispatch();
  
  const handleEdit = (record: DataUser) => {
    console.log(record)
    dispatch(editData(record));
  };

  const handleDelete = (uuid:any) => {
    dispatch(deleteData(uuid));
  };

  const onClearAll = () =>{
    dispatch(clearFormData());
}

  const columns = [

    {
      title: t('table.name'),
      dataIndex: 'name',
      key: 'name',
      className: 'align-center-n',
      sorter: (a: DataUser, b: DataUser) => a.name.localeCompare(String(b.name))
      
    },
    {
      title: t('table.telephone'),
      dataIndex: 'telephone',
      key: 'telephone',
      className: 'align-center-t',
      sorter: (a: DataUser, b: DataUser) => a.telephone.localeCompare(String(b.telephone))
    },
    {
      title: t('table.sex'),
      dataIndex: 'sex',
      key: 'sex',
      className: 'align-center',
      sorter: (a: DataUser, b: DataUser) => a.sex.localeCompare(String(b.sex))
    },
    {
      title: t('table.nationality'),
      dataIndex: 'nationality',
      key: 'nationality',
      className: 'align-center',
      sorter: (a: DataUser, b: DataUser) => a.nationality.localeCompare(String(b.nationality))
    },
    {
      title: t('table.expectedsalary'),
      dataIndex: 'expectsalary',
      key: 'expectsalary',
      className: 'align-center',
      sorter: (a: DataUser, b: DataUser) => a.expectsalary.localeCompare(String(b.expectsalary))
    },
    {
        title: t('table.actions'),
        key: 'actions',
        render: (text: any, record: DataUser) => (
          <span>
            <Button onClick={() => handleEdit(record)} type="link">
              Edit
            </Button>
            <Button onClick={() => handleDelete(record.uuid)} type="link" danger>
              Delete
            </Button>
          </span>
        ),
      },
  ];

  return (
    <div>
    <Button type="primary" onClick={onClearAll} style={{marginLeft:'30px',marginTop:'10px'}}>
    {t('buttons.clearall')}
    </Button>
    <Table dataSource={formData} 
    columns={columns} 
    rowKey="uuid"
    pagination={{ pageSize: 5 }} 
    className="section"
    />
    </div>
  );
};

export default DataTable;
