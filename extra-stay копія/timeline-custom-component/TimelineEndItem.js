import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Box } from '@mui/system';
import InfoChip from 'src/@core/components/InfoChip';


const TimelineEndItem = ({time, notAllow}) => {

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{minWidth: '76px'}}>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color='primary' />
        <Box sx={{position: 'absolute', top: '30px'}}>
          {time}
        </Box>
      </TimelineSeparator>
      <TimelineContent sx={{padding: '8px 8px'}}>
        {
          notAllow && <InfoChip sx={{mt: '-80px'}} data={'N/A'} color={'error'}/>
        }
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineEndItem
