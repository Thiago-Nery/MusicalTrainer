import { Popover, Typography } from 'antd';
import "./Footer.css"


const { Paragraph } = Typography;

const content = (
    <div>
        infos de curriculo
        {
            //TODO: finalizar infos de curriculo
        }   
    </div>
)

export default function Footer(){
    return (
      <div className="Footer">
        <Paragraph className="paragraph">
          Criado por:
          <Popover content={content}>
            <a> Thiago Nery</a>
          </Popover>
        </Paragraph>
      </div>
    );
}