import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        table:{
            name :"Name",
            telephone :"Telephone",
            sex :"Sex",
            nationality :"Nationality",
            expectedsalary :"Expectedsalary",
            actions :"Actions",
        },
        shape:{
            moveL:"MoveLeft",
            moveR:"moveRight",
            swap:"Swap"
        },
        buttons: {
          buttonLabel: 'EN',
          buttonHome: 'Home',
          button1: 'test 1',
          button2: 'test 2',
          submitform: 'Submit',
          clearform: 'Clear',
          update:'Update',
          clearall:'ClearAll'
        },
        explanations: {
          explain1: 'Layout & Style',
          explain2: 'Form & Table',
        },
        formFields: {
          title: 'Title',
          name: 'Name',
          surname: 'Surname',
          birth: 'Date of Birth',
          nationality: 'Nationality',
          idno: 'ID Number',
          sex: { 
            sex:'Sex',
            male: 'Male',
            female: 'Female',
            other: 'Unspecified',},
          telephone: 'Telephone',
          telephonePrefix:'TelephonePrefix',
          telephonemid:'Telephonemid',
          passport: 'Passport Number',
          expectsalary: 'Expected Salary',
        },
        placeholder:{
            birth:'Select Date'
        },
        dropdown:{
            title:{
                female:'Ms.',
                male:'Mr.',
            },
            nationality:{
                thai:'Thailand',
                usa:'United States'
            },

        },
        notify:{
            msg:'Please input your {{field}}!'
        }
      },
    },
    th: {
      translation: {
        table:{
            name :"ชื่อ",
            telephone :"เบอร์โทรศัพท์",
            sex :"เพศ",
            nationality :"สัญชาติ",
            expectedsalary :"เงินเดือนที่คาด",
            actions :"จัดการ",
        },
        shape:{
            moveL:"เคลื่อนไปซ้าย",
            moveR:"เคลื่อนไปขวา",
            swap:"สลับ"
        },
        buttons: {
          buttonLabel: 'TH',
          buttonHome: 'หน้าแรก',
          button1: 'การทดสอบที่ 1',
          button2: 'การทดสอบที่ 2',
          submitform: 'ส่ง',
          clearform:'ล้างข้อมูล',
          update:'อัปเดต',
          clearall:'ล้างทั้งหมด'
        },
        explanations: {
          explain1: 'การจัดการหน้าเว็บ',
          explain2: 'การจัดการหน้าฟอร์ม',
        },
        formFields: {
          title: 'คำนำหน้า',
          name: 'ชื่อ',
          surname: 'นามสกุล',
          birth: 'วันเกิด',
          nationality: 'สัญชาติ',
          idno: 'เลขบัตรประชาชน',
          sex: {
            sex:'เพศ',
            male: 'ชาย',
            female: 'หญิง',
            other: 'ไม่ระบุ',
          },
          telephone: 'เบอร์',
          telephonePrefix:'รหัสหน้า',
          telephonemid:'เบอร์โทรศัพท์',
          passport: 'หนังสือเดินทาง',
          expectsalary: 'เงินเดือนที่หวัง',
        },
        placeholder:{
            birth:'เลือกวันเกิด'
        },
        dropdown:{
            title:{
                female:'นางสาว',
                male:'นาย',
            },
            nationality:{
                thai:'ไทย',
                usa:'อเมริกัน'
            },

        },
        notify:{
            msg:'กรุณาเลือก {{field}} ของคุณ'
        }
      },
    },
  };
  

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
