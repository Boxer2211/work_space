import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ButtonIconText from 'src/@core/components/ButtonIconText';
import { iconsConfig } from 'src/configs/iconsConfig';


const HeaderCheckInOut = ({
    editMode,
    t,
    title,
    setOpenModalCreateRules,
  }) => {

  const handleOpenModalCreate = () => {
    setOpenModalCreateRules(true)
  }

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h2' sx={{ fontSize: '1.2rem !important', color: 'grey'}}>
        {title.toUpperCase()}
      </Typography>
      {
        editMode &&
        <ButtonIconText
          icon={iconsConfig.actions.ADD}
          onClick={handleOpenModalCreate}
        >
          {t('common.CREATE')}
        </ButtonIconText>
      }
    </Box>
  )
}

export default HeaderCheckInOut
