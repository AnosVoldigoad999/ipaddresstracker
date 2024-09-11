import React from 'react'

function Info({ip, location, timezone, isp, isLoading}) {
  return <>
    <div className="info">
        <div className="ip">
            <h5>IP ADDRESS</h5>
            <span>{ip}</span>
        </div>
        <div className="location">
            <h5>LOCATION</h5>
            {isLoading ?"Loading...":<span>{location}</span>}
        </div>
        <div className="timezone">
            <h5>TIMEZONE</h5>
            {isLoading ?"Loading...":<span>{timezone}</span>}
        </div>
        <div className="isp">
            <h5>ISP</h5>
            {isLoading ?"Loading...":<span>{isp}</span>}
        </div>
    </div>
  </>
}

export default Info