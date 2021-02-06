import React from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

const Chat = () => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
      </ListItemAvatar>
      <div className="p-chat__bubble">ダミーテキスト</div>
    </ListItem>
  )
}

export default Chat
