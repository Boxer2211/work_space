import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ListingHeader from 'src/@core/components/listing/ListingHeader';
import { selectExtraStayCondition, selectSetting } from 'src/store/extraStay';
import ActionButtonHeader from 'src/views/extra-stay/ActionButtonHeader';
import ExtraStayViewCheckIn from 'src/views/extra-stay/ExtraStayViewCheckIn';
import ExtraStayViewCheckOut from 'src/views/extra-stay/ExtraStayViewCheckOut';


const ExtraStayViewPage = ({propertyId}) => {

  const { t } = useTranslation()

  const [editMode, setEditMode] = useState(false)
  const [extraStayConditionsCheckIn, setExtraStayConditionsCheckIn] = useState([])
  const [extraStayConditionsCheckOut, setExtraStayConditionsCheckOut] = useState([])

  const settings = useSelector(selectSetting)
  const extraStayConditions = useSelector(selectExtraStayCondition)

  return (
    <>
      <ListingHeader
        title={t('extraStay.EXTRA_STAY_PAGE_HEADER_TITLE')}
        description={t('extraStay.EXTRA_STAY_PAGE_HEADER_DESCRIPTION')}
        actionComponent={
          <ActionButtonHeader
            editMode={editMode}
            setEditMode={setEditMode}
            t={t}
            extraStayConditions={extraStayConditions}
            extraStayConditionsCheckIn={extraStayConditionsCheckIn}
            setExtraStayConditionsCheckIn={setExtraStayConditionsCheckIn}
            extraStayConditionsCheckOut={extraStayConditionsCheckOut}
            setExtraStayConditionsCheckOut={setExtraStayConditionsCheckOut}
            propertyId={propertyId}
          />
        }
      />
      <Grid container spacing={6}>
        <Grid item xs={6}>

          {/* Check-in rules */}
          <ExtraStayViewCheckIn
            editMode={editMode}
            t={t}
            settingCheckInTime={settings.CHECK_IN_TIME}
            settingStepInMinutes={settings.CHECK_IN_OUT_STEP_IN_MINUTES}
            extraStayConditionsCheckIn={extraStayConditionsCheckIn}
            setExtraStayConditionsCheckIn={setExtraStayConditionsCheckIn}
          />
        </Grid>
        <Grid item xs={6}>

          {/* Check-out rules*/}
          <ExtraStayViewCheckOut
            editMode={editMode}
            t={t}
            settingCheckOutTime={settings.CHECK_OUT_TIME}
            settingStepInMinutes={settings.CHECK_IN_OUT_STEP_IN_MINUTES}
            extraStayConditionsCheckOut={extraStayConditionsCheckOut}
            setExtraStayConditionsCheckOut={setExtraStayConditionsCheckOut}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default ExtraStayViewPage
