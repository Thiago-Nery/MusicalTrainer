import { Link } from "react-router-dom"
import { Typography } from "antd"

const { Title } = Typography;   


export default function NotFound(){
    return (
        <div>
            <Title level={2}>🎵 Musical Trainer informa:</Title>
            <Title>Ops! Ainda estamos aprendendo esse assunto...</Title>
            <Title>
                <Link to="/"> Voltar a praticar ←</Link>
            </Title>
        </div>

    )
}