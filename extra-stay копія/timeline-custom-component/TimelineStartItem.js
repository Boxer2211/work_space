import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Box } from '@mui/system';
import InfoChip from 'src/@core/components/InfoChip';


const TimelineStartItem = ({time, notAllow}) => {

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{minWidth: '76px'}}>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Box sx={{position: 'absolute'}}>
          {time}
        </Box>
        <TimelineDot color='primary' sx={{mt: 7}}/>
        <TimelineConnector sx={{minHeight: '35px'}}/>
      </TimelineSeparator>
      <TimelineContent sx={{padding: '8px 8px'}}>
        {
          notAllow && <InfoChip sx={{mb: '-90px'}} data={'N/A'} color={'error'}/>
        }
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineStartItem
