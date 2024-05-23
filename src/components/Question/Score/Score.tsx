import { Row, Col, Card, Typography, Button } from 'antd';
import { QuestionCircleOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import "./Score.css"

const { Title } = Typography;

interface ScoreProps {
  questionCounter: number;
  correctCounter: number;
  wrongCounter: number;
}

export default function Score({questionCounter, correctCounter, wrongCounter}: ScoreProps){
    return (
      <div className="Score">
        <Row gutter={[5,5]}>
          <Col xs={24} md={16}>
            <Card size="small" className="card-style">
              <div className="question-title">
                <Title level={2} className="question-number no-margin">
                  Questão {questionCounter}
                </Title>
                <Button type="link" size="large" icon={<QuestionCircleOutlined />}/>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card size="small" className="card-style">
              <Title level={2} className="no-margin">
                <div className="score-points">
                  <CheckCircleFilled style={{color: "#52c41a"}}/>
                  <div className="score-number">{correctCounter}</div>
                </div>
              </Title>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card size="small" className="card-style">
              <Title level={2} className="no-margin">
                <div className="score-points">
                  <CloseCircleFilled style={{color: "#ff4d4f"}}/>
                  <div className="score-number">{wrongCounter}</div>
                </div>
              </Title>
            </Card>
          </Col>
        </Row>
      </div>
    );
}