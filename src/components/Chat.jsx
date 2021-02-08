import React from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

const Chat = (props) => {
  const isQ = props.type === 'question';
  const typeClass = isQ ? 'p-chat__row' : 'p-chat__revers';
  return (
    <ListItem className={typeClass }>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat
