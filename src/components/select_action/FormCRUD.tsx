import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Radio, Button,Card } from 'antd';
import { useAppDispatch, useAppSelector } from '../other_component/HookType'
import { setFormData, clearFormData, DataUser }  from '../../store/Reducer'
import { updateData }  from '../../store/Reducer2'
import { useEffect } from 'react';
import DataTable from '../other_component/DataTable';
// import moment from 'moment';
import { format } from 'date-fns';
import moment, { Moment } from 'moment';
import './FormCRUD.scss'

const { Option } = Select;
const FormCRUD = (props:any) => {
    const { t }  = props
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [buttonUpdate, setButtonUpdate] = useState(false);
    const formData = useAppSelector((state) => state.reducerform);
    const edit = useAppSelector((state) => state.reduceredit);
 
    useEffect(() => {
        if (edit.length > 0) {
            setButtonUpdate(true)
            form.setFieldsValue({
            title: edit[0].title,
            name: edit[0].name,
            surname: edit[0].surname,
            birth: moment(String(edit[0].birth)),
            nationality: edit[0].nationality,
            idno: edit[0].idno,
            sex: edit[0].sex,
            telephone: edit[0].telephone,
            passport: edit[0].passport,
            expectsalary: edit[0].expectsalary,
            telephonePrefix: edit[0].telephonePrefix,
            telephonemid: edit[0].telephonemid,

          });
        }
      }, [edit, form]);
    // const onFinish = (values: any) => {
    //     const telephone = `${values.telephonePrefix}-${values.telephone}`;
    //     const formData = {
    //       ...values,
    //       telephone,
    //     };
    //     dispatch(setFormData(formData));
    //   };

    const onFinish = (values:DataUser ) => {
    // console.log(values)
    const { telephonePrefix, telephonemid, ...rest } = values;
    const telephone = `${telephonePrefix}${telephonemid}`;
    const idno = {
        idnoch1: values.idno.idnoch1  || 'x',
        idnoch2: (values.idno.idnoch2 || 'x').padEnd(4, 'x'),
        idnoch3: (values.idno.idnoch3 || 'x').padEnd(5, 'x'),
        idnoch4: (values.idno.idnoch4 || 'x').padEnd(2, 'x'),
        idnoch5: (values.idno.idnoch5 || 'x').padEnd(1, 'x'),
      };
    // const formattedBirth = values.birth ? moment(values.birth).format('YYYY-MM-DD') : '';
    let formattedBirth = '';
    if (values.birth) {
        try {
            formattedBirth = format(new Date(String(values.birth)), 'yyyy-MM-dd');
        } catch (error) {
            console.error('Invalid date format:', values.birth);
        }
    }
    const birth = formattedBirth
    const formDataToSend: DataUser = {
      ...rest,
      telephone,
      idno,
      birth,
      telephonePrefix,
      telephonemid
      
    };
    console.log(formDataToSend); 
    if (buttonUpdate) {
        const uuid = edit[0].uuid
        const formDataToSend: DataUser = {
            ...rest,
            uuid,
            telephone,
            idno,
            birth,
            telephonePrefix,
            telephonemid
            
          };
        dispatch(updateData(formDataToSend));

    }else{
    dispatch(setFormData(formDataToSend));

    }
      };

    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);

    
    };
    const onClear = () => {
        setButtonUpdate(false);
        form.resetFields();
      };
 
  return (
    <div style={{ flexDirection:'column',display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',marginTop: '30px' }}>
    <Card style={{ width: 700, border: '1px solid #d9d9d9', borderRadius: 5}}>
    <Form
      form={form}
      name="basic"
    //   initialValues={{ telephone: '' , telephonemid: ''}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t('formFields.title')}
        name="title"
        className="custom-form-row-1 custom-title-input"
        rules={[{ required: true, 
            message: t('notify.msg', { field: t('formFields.title') }),
        }]}
      >
         <Select>
          <Option value="นาย">{t('dropdown.title.male')}</Option>
          <Option value="นางสาว">{t('dropdown.title.female')}</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label={t('formFields.name')}
        name="name"
        rules={[{ required: true,
             message: t('notify.msg', { field: t('formFields.name') }),
        }]}
        className="custom-form-row-1 custom-name-surname-input"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('formFields.surname')}
        name="surname"
        rules={[{ required: true,
            message: t('notify.msg', { field: t('formFields.surname') })
             }]}
        className="custom-form-row-1 custom-name-surname-input"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('formFields.birth')}
        name="birth"
        rules={[{ required: true,
            message: t('notify.msg', { field: t('formFields.birthdate') }) 
        }]}
        className="custom-form-row-2 custom-birth"
      >
        <DatePicker style={{ width: '100%' }}
        placeholder={t('placeholder.birth')}  /> 
      </Form.Item>

      <Form.Item
        label={t('formFields.nationality')}
        name="nationality"
        rules={[{  required: true,
            message: t('notify.msg', { field: t('formFields.nationality') })  
        }]}
        className="custom-form-row-2 custom-national"      
      >
        <Select>
          <Option value="thailand">{t('dropdown.nationality.thai')}</Option>
          <Option value="usa">{t('dropdown.nationality.usa')}</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label={t('formFields.idno')} 
        name="idNumber"
      >
       <div className='custom-form-row-3'>
          <Form.Item name={['idno', 'idnoch1']} noStyle>
            <Input className="box-1" maxLength={1} />
          </Form.Item>
          <span className="dash">-</span>
          <Form.Item name={['idno', 'idnoch2']} noStyle>
            <Input className="box-2" maxLength={4} />
          </Form.Item>
          <span className="dash">-</span>
          <Form.Item name={['idno', 'idnoch3']} noStyle>
            <Input className="box-3" maxLength={5} />
          </Form.Item>
          <span className="dash">-</span>
          <Form.Item name={['idno', 'idnoch4']} noStyle>
            <Input className="box-4" maxLength={2} />
          </Form.Item>
          <span className="dash">-</span>
          <Form.Item name={['idno', 'idnoch5']} noStyle>
            <Input className="box-5" maxLength={1} />
          </Form.Item>
        </div>
      </Form.Item>

      <Form.Item
        label={t('formFields.sex.sex')} 
        name="sex"
        className='custom-form-row-4'
        rules={[{ required: true,
            message: t('notify.msg', { field: t('formFields.sex.sex') }) 
             }]}
      >
        <Radio.Group >
          <Radio value="male">{t('formFields.sex.male')} </Radio>
          <Radio value="female">{t('formFields.sex.female')} </Radio>
          <Radio value="other">{t('formFields.sex.other')} </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label={t('formFields.telephone')} 
        name="telephonePrefix"
        className='custom-form-row-4'
        rules={[{ required: true }]}
      >
        <Input.Group compact >
        <Form.Item 
        name="telephonePrefix" 
        noStyle
        rules={[{ required: true, 
            message: t('notify.msg', { field: t('formFields.telephonePrefix') }) 

         }]}
        >
          <Select style={{ width: '15%'  }} >
            <Option value="+66">+66</Option>
            <Option value="+33">+33</Option>
          </Select>
        </Form.Item>
        <span className="dash">-</span>
        <Form.Item
            name="telephonemid"
            noStyle
            rules={[{ required: true, 
                message: t('notify.msg', { field: t('formFields.telephonemid') }) 

             }]}
          >
            <Input style={{ width: '78%',marginLeft:'3px' }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        label={t('formFields.passport')}
        name="passport"
        className="custom-form-row-6"
      >
        <Input style={ {width: '165px'} } />
      </Form.Item>

      <Form.Item
        label={t('formFields.expectsalary')}
        name="expectsalary"
        className="custom-form-row-6 custom-expect-salary"
        rules={[{ required: true, 
            message: t('notify.msg', { field: t('formFields.expectsalary') }) 
         }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <div style={{float:'right'}}>
        
        { buttonUpdate ? 
        ( <Button type="primary" htmlType="submit">
          {t('buttons.update')}
        </Button>):
        ( <Button type="primary" htmlType="submit">
          {t('buttons.submitform')}
        </Button>)}
       
        <Button type="primary" onClick={onClear} style={{marginLeft:'5px'}}>
          {t('buttons.clearform')}
        </Button>
        </div>
      </Form.Item>
    </Form>
    </Card>
   
    <DataTable t={t}/>
    
    </div>
  );
};

export default FormCRUD;
