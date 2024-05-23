import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';

const { Title } = Typography;

interface QuestionFormProps {
    questionTitle: string;
    onFinish: ({ guess }: { guess: string }) => void;
}

export default function QuestionForm({questionTitle, onFinish}: QuestionFormProps){
    return (
      <Row justify="center" gutter={[40, 40]}>
        <Col span={24}>
          <Title level={1} className="question">
            {questionTitle}
          </Title>
        </Col>
        <Col span={24}>
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