import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views'
import { NothingSelectedView } from '../views/NothingSelectedView'
// import { MailOutline } from '@mui/icons-material'

export const JournalPage = () => {

    return (

      <JournalLayout>
        {/* <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error alias nostrum quia dicta ratione quod ab omnis incidunt dolore fuga nisi aliquid, numquam consequatur delectus! Consequuntur error sequi unde!</Typography> */}
        {/* <MailOutline /> */}

        <NothingSelectedView />
        {/* <NoteView /> */}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

      </JournalLayout>

    )
}
