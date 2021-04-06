import { Avatar, IconButton } from '@material-ui/core'
import styled from "styled-components"
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconContainer>
      </Header>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;
`

const IconContainer = styled.div``