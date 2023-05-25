import { Col, Row, Skeleton as AntSkleton,Card } from "antd"
const {Meta} = Card;
export const Skleton =({ count })=>{
 const arr = [];
 for (let i=0; i < count; i++){
    arr.push(i);
 }
    return(
    <Row gutter={[24,24]} >
        {arr.map((item)=>(
        <Col   span={6} >
        <AntSkleton loading={true} avatar active>
          <Meta
            title="Card title"
            description="This is the description"
          />
        </AntSkleton>
        </Col>
         ))}
    </Row>
    );
};