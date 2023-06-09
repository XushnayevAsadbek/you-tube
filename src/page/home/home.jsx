import { useHomeProps } from "./home.props"
import { hoc } from "../../utils"
import { Card, Col, Row, } from 'antd'
import { Skleton } from "../../components/layout/skleton";
const { Meta } = Card;
export const Home = hoc(useHomeProps, ({ videos , loading , onNavigate}) => {
      
      
  return loading ? <Skleton count={16} /> : (
    <Row gutter={[20, 20]} >
      {videos.map(({video}) => (
        < Col span={6} key={video.videoId} >
          <Card
            hoverable
            bodyStyle={{
              padding:'16px',
            }}
            onClick={onNavigate.bind(null,  video.videoId)}
            cover={<img alt="example" src={video.thumbnails[0].url} />}
          >
            {console.log(video)}
            <Meta title={video.title} description={
              <>
              <p style={{
                marginBottom:'10px'
              }}>{video.channelName}</p>
              <p style={{
                marginTop:'0'
              }}> {video.viewCountText }</p>
              </>
            } />
          </Card>
        </Col>
      ))}

    </Row >
  )
})