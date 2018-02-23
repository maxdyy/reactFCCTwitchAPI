import React, {Component} from 'react';
import {Card, Icon, Avatar, Tooltip, Alert} from 'antd';
import '../css/Card.css'
const {Meta} = Card;

class UserCard extends Component {
  render() {
    const user = this.props.user;

    if(user.error) {
      return (
      <Alert
      style={{ width: 300}}
      message={"Error 422 :("}
      description={user.message}
      type="error"
      closable
    />
      )
    }

    const stream = this.props.stream;

    if(!Object.keys(stream).length) {
      return (
        <div>Loading...</div>
      );
    }

    const userStream = this.props.stream.data.stream;
    const banner = user.profile_banner;
    const defaultBanner = "https://edge.alluremedia.com.au/m/k/2014/01/gaming-twitch-tv-logo.jpg";
    const url = user.url;
    const logo = user.logo;
    const name = user.display_name;
    const status = user.status;
    const isLive = userStream ? true : false;

    return (
      <Card style={{ width: 300}}
        cover={<img
          alt = "banner"
          src = {banner ? banner : defaultBanner} />}
        actions={[
          <Tooltip placement="bottom" title="visit channel">
            <Icon
              type="play-circle"
              onClick={() => window.open(url, "_blank")}
            />
           </Tooltip>,
           <Tooltip placement="bottom" title={isLive ? userStream.game : "channel offline"}>
             <Icon type={isLive ? "check" : "close"}/>
           </Tooltip>,
           <Tooltip placement="bottom" title="source code">
             <Icon
               type="github"
               onClick={() => window.open("https://github.com/maxdyy/reactFCCTwitchAPI", "_blank")}
             />
           </Tooltip>,
        ]}>
      <Meta avatar={
        <Avatar
          src = {logo} />}
          title={name}
          description={status}
        />
      </Card>
    )
  }
}

export default UserCard;
