import { Button, Col, Form, Input, Row, Space, Typography, Image } from 'antd';
// import imagepath from "../../../data/Staff/-1-espaco.png"

const { Title } = Typography;

interface QuestionFormProps {
    questionTitle: string;
    onFinish: ({ guess }: { guess: string }) => void;
    questionImage?: string;
}

export default function QuestionForm({questionTitle, onFinish, questionImage}: QuestionFormProps){
    return (
      <Row justify="center" gutter={[40, 40]}>
        <Col span={24}>
          <Title level={1} className="question" style={ questionImage ? { marginTop: -20 } : {}}>
            {questionTitle}
          </Title>
        </Col>
        {questionImage && (
          <Col span={24} style={{ textAlign: 'center', marginTop: -20}} >
            <Image src={questionImage}/>
          </Col>
        )}
        <Col span={24} style={ questionImage ? { marginTop: -20 } : {}}>
          <Row justify="center">
            <Form className="guess-form" onFinish={onFinish}>
              <Form.Item
                name="guess"
                rules={[{ required: true, message: "Obrigatório" }]}
              >
                <Space.Compact className="guess-input">
                  <Input
                    placeholder={"Use a tecla 'espaço' para separar notas"}
                    autoFocus
                  />
                  <Button type="primary" htmlType="submit">
                    Verificar
                  </Button>
                </Space.Compact>
              </Form.Item>
            </Form>
          </Row>
        </Col>
      </Row>
    );
}