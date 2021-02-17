import React, { useEffect, useState} from "react";
import "./Programs.scss";
import News from "../../../components/Visitor/News";
import MostViewed from "../../../components/Visitor/MostViewed";
import ListSections from "../../../components/Visitor/Sections/ListSections";
import {getProgramsSectionVisitorApi} from "../../../api/program";
import { Row, Col, Card } from "antd";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getProgramsSectionVisitorApi(1).then((response) => {
      setPrograms(response);
    });
  });

  return (
    <>
    <Row>
    <Col className="left-news" flex={4}>
      <ListSections programs={programs}/>
    </Col>
    <Col flex={1}>
      <Card className="card">
        <h1>Patrocinadores</h1>
      </Card>
      <Card className="card">
        <h1>Anuncios</h1>
      </Card>
      <Card className="card">
      <h1>Relacionadas</h1>
        <MostViewed ClassName="mostviewed" />
      </Card>
      </Col>
  </Row>
  <Card className="patrocinadores">
    <h1>Patrocinadores</h1>
  </Card>
</>
  );
}
