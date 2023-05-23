import { useHomeProps } from "./home.props"
import { hoc } from "../../utils"
import { Card, Col, Row } from 'antd'
const { Meta } = Card;
export const Home = hoc(useHomeProps, ({ videos }) => {
  return (
    <Row gutter={[20, 20]} >
      {videos.map(({video}) => (
        < Col span={6} >
          <Card
            hoverable
            bodyStyle={{
              padding:'16px',
            }}
            cover={<img alt="example" src={video.thumbnails[0].url} />}
          >
            {console.log(video)}
            <Meta title={video.title} description={video.viewCountText} />
          </Card>
        </Col>
      ))}

    </Row >
  )
})