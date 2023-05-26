import { Link } from "react-router-dom"

export const Short = ({ stateshort }) => {
    return (
        <div style={{
            display:'flex',
        }}>

            {stateshort?.data?.description


            },
          <Link style={{
            display:'block',
            fontSize:'24px',
          }} to={stateshort?.data?.vanityChannelUrl}>
          Short
          </Link>
        </div>
    )
}