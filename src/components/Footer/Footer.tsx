import { Popover, Typography } from 'antd';
import "./Footer.css"


const { Paragraph, Link } = Typography;

const content = (
    <div>
      <Paragraph>
        Apaixonado por música e programação, dedicado a transformar código em soluções reais.
      </Paragraph>
      <Paragraph>
        <a href="https://github.com/Thiago-Nery">
          Visite meu Github
        </a>
      </Paragraph>
    </div>
)

export default function Footer(){
    return (
      <div className="Footer">
        <Paragraph className="paragraph">
          Criado por:
          <Popover content={content}>
            <a href="https://github.com/Thiago-Nery"> Thiago Nery Fabricio </a>
          </Popover>
        </Paragraph>
      </div>
    );
}