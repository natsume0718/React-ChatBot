import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Chat } from './index'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

const Chats = (props) => {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      {props.chats.map((val,i) => {
        return (
          <Chat text={val.text} type={val.type} key={i.toString()}></Chat>
        )
      })}

    </List>
  )
}

export default Chats
