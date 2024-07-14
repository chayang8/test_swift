import { Button, Layout, Menu } from 'antd'; 
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout ;
  function HeaderLayout () {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };
    const home = () => {
      navigate('/');
    };
    
    return (
      <header style={{ display: 'flex', justifyContent: 'right' }}>
      <Button onClick={() => changeLanguage(i18n.language === 'en' ? 'th' : 'en')}>{
      t('buttons.buttonLabel')}
      </Button>
      <Button onClick={home}>{t('buttons.buttonHome')}</Button>

    </header>
    );
  };

export default HeaderLayout;
{/* <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ float: 'right' }}>
        <Menu.Item key="1" onClick={() => changeLanguage(i18n.language === 'en' ? 'th' : 'en')}>
          {i18n.language === 'th' }
         
        </Menu.Item>
        <Menu.Item key="1" >
        </Menu.Item> */}
      // </Menu>

    