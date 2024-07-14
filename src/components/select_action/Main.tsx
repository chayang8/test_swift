
import { Button, Layout, Menu } from 'antd'; 
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

function Main(props:any) {
    const { t } = props;
    const navigate = useNavigate();

    const layoutButton = () => {
        navigate('/LayoutStyle');
      };
    const formButton = () => {
        navigate('/FormCRUD');
      };
      

    return (
        <div style={{backgroundColor:"black"}}>
        <Layout 
        style={{backgroundColor:"White"}}
        >
        <Content style={{ padding: '0 50px', marginTop: 64 ,backgroundColor: 'white'}}>
          <div style={{ backgroundColor: 'white',minHeight: 'calc(100vh - 64px - 70px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div >
              <Button type="primary" 
              style={{width: '250px',height: '90px'}}
              onClick={layoutButton}>

              <div>
                {t('buttons.button1')}
                <br />
                {t('explanations.explain1')}
            </div>
              </Button>
              <Button type="primary" 
              style={{ marginLeft: '10px',width: '250px',height: '90px'}}
               onClick={formButton}>
                <div>
                {t('buttons.button2')}
                <br />
                {t('explanations.explain2')}
            </div>
              </Button>
            </div>
          </div>
        </Content>
        {/* <Footer></Footer> */}
      </Layout>
      </div>
    )

}
export default Main;