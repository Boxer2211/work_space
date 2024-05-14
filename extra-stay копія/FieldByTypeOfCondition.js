import Typography from '@mui/material/Typography';
import InfoChip from 'src/@core/components/InfoChip';

const FieldByTypeOfCondition = ( { typeOfCondition, valuePercent, }) => {

  switch (typeOfCondition) {
    case 'PERCENT':
      return <Typography sx={{m: '8px 0'}}>{valuePercent}%</Typography>;
      break;
    case 'FREE':
      return <InfoChip sx={{m: '8px 0'}} data={'FREE'} color={'warning'}/>;
      break;
    case 'NOT_ALLOW':
      return <InfoChip sx={{m: '8px 0'}} data={'N/A'} color={'error'}/>;
      break;
  }
}

export default FieldByTypeOfCondition
