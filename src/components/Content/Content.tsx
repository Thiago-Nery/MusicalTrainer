import { Outlet } from "react-router-dom";
import { Card } from "antd";
import "./Content.css"


export default function Content(){
    return (
      <div className="content-container">
        <Card bordered className="content-card">
          <Outlet />
        </Card>
      </div>
    );
}