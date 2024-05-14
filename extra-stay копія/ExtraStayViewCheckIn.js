import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent, timelineOppositeContentClasses,
  TimelineSeparator
} from '@mui/lab';
import MuiTimeline from '@mui/lab/Timeline'
import { Card, CardContent } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import Icon from 'src/@core/components/icon';
import DefaultModalActions from 'src/@core/components/modal/DefaultModalActions';
import ModalTemplate from 'src/@core/components/modal/ModalTemplate';
import { iconsConfig } from 'src/configs/iconsConfig';
import BodyForModalCreateRules from 'src/views/extra-stay/BodyForModalCreateRules';
import FieldByTypeOfCondition from 'src/views/extra-stay/FieldByTypeOfCondition';
import HeaderCheckInOut from 'src/views/extra-stay/HeaderCheckInOut';
import TimelineEndItem from 'src/views/extra-stay/timeline-custom-component/TimelineEndItem';
import TimelineStartItem from 'src/views/extra-stay/timeline-custom-component/TimelineStartItem';
import { isValueNotNull, sortArrayConditionsByTime } from 'src/views/extra-stay/utilsForExtraStay';

const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '50%',
    '&:before': {
      display: 'none'
    }
  }
})

const ExtraStayViewCheckIn = ({
    editMode,
    t,
    settingCheckInTime,
    settingStepInMinutes,
    extraStayConditionsCheckIn,
    setExtraStayConditionsCheckIn
                           }) => {

  const [openModalCreateRules, setOpenModalCreateRules] = useState(false)
  const [openModalEditRules, setOpenModalEditRules] = useState(false)
  const [exclusionsCheckIn, setExclusionsCheckIn] = useState([])
  const [checkIn, setCheckIn] = useState(null)
  const [valueCheckIn, setValueCheckIn] = useState('')
  const [validValue, setValidValue] = useState(true)
  const [validCheck, setValidCheck] = useState(true)
  const [editTime, setEditTime] = useState(null)
  const [typeOfCondition, setTypeOfCondition] = useState('PERCENT')

  useEffect( () => {

    const arrForExclusions = extraStayConditionsCheckIn?.map((item) => item.time)

    setExclusionsCheckIn(arrForExclusions)
  }, [extraStayConditionsCheckIn] );

  const minutes = parseInt(settingStepInMinutes) // крок в хвилинах з якого генерувати час в модалках
  const startHours = 0 // параметр з якої години генерувати час в модалці
  const endHours = parseInt(settingCheckInTime?.split(':')[0], 10) // параметр до якої години генерувати час в модалці

  const titleForModal = 'CHECK_IN' //todo add trans

  const resetField = () => {
    setCheckIn(null)
    setValueCheckIn('')
    setValidValue(true)
    setValidCheck(true)
    setOpenModalCreateRules(false)
    setOpenModalEditRules(false)
    setEditTime(null)
  }

  const handleApplyChange = () => {
    if( isValueNotNull(checkIn)) {

      setExclusionsCheckIn((prev) => [...prev, checkIn])

      setExtraStayConditionsCheckIn((prev) => {
        const updatedArray = [...prev, { time: checkIn, type: typeOfCondition, value: valueCheckIn, newItem: true }]

        return sortArrayConditionsByTime(updatedArray)
      })

      resetField()
    } else {
      setValidCheck(isValueNotNull(checkIn))
    }
  }

  const handleClose = () => {
    resetField()
  }

  const handleDeleteRules = (timeToDelete) => {
    setExtraStayConditionsCheckIn((prev) => prev.filter((item) => item.time !== timeToDelete))
    setExclusionsCheckIn((prev) => prev.filter((item) => item !== timeToDelete))
  }

  const handleOpenEdit = (time, value) => {
    setOpenModalEditRules(true)
    setCheckIn(time)
    setValueCheckIn(value)
    setEditTime(time)
  }

  const handleEdit = () => {
    if( isValueNotNull(checkIn)) {

      setExclusionsCheckIn((prev) => [...prev, checkIn])

      setExtraStayConditionsCheckIn((prev) => {
        const updatedArray = prev.map((item) => {
          if (item.time === editTime) {
            return {
              ...item,
              time: checkIn,
              value: valueCheckIn,
              type: typeOfCondition,
              editItem: !item.newItem ? true : item.editItem, // Якщо не newItem, то змінюємо editItem на true
            };
          }

          return item; // Повертаємо незмінений об'єкт, якщо не відповідає умові
        });

        return sortArrayConditionsByTime(updatedArray);
      });

      //todo test
      // handleDeleteRules(editTime)

      resetField()
    } else {
      setValidCheck(isValueNotNull(checkIn))
    }
  }

  return (
    <>
    <Card>
      <CardContent>
        <HeaderCheckInOut
          editMode={editMode}
          t={t}
          title={t('extraStay.EARLY_CHECK_IN')}
          setOpenModalCreateRules={setOpenModalCreateRules}
        />
        <Divider sx={{ mt: 3 }}/>

        <Timeline sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}>

          <TimelineStartItem time={'00:00'} notAllow={true}/>
          {
            extraStayConditionsCheckIn?.map((item) => (
              <TimelineItem key={item.time}>
                <TimelineOppositeContent sx={{minWidth: '76px'}}>
                  {item.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color='primary' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'end',
                  padding: '0 8px',
                  mb: '0px !important',
                  minWidth: '150px',
                  backgroundColor: item.newItem
                    ? 'rgba(0, 128, 0, 0.5)'
                    : item.editItem
                      ? 'rgba(0, 0, 255, 0.2)'
                      : 'none'
                }}>
                  <FieldByTypeOfCondition
                    typeOfCondition={item.type}
                    valuePercent={item.value}
                  />
                  {editMode &&
                    <Box>
                      <IconButton
                        title='Edit'
                        onClick={() => handleOpenEdit(item.time, item.value)}
                      >
                      <Icon.Action icon={iconsConfig.actions.EDIT} />
                      </IconButton>
                        <IconButton
                          title='Delete'
                          onClick={() => handleDeleteRules(item.time)}
                        >
                      <Icon.Action icon={iconsConfig.actions.DELETE} />
                    </IconButton>
                    </Box>}
                </TimelineContent>
              </TimelineItem>
            ))
          }
          <TimelineEndItem time={`${endHours}:00`}/>
       </Timeline>
      </CardContent>
    </Card>

      {/* Modal Create*/}
      <ModalTemplate
        open={openModalCreateRules}
        handleClose={handleClose}
        header={{ title: titleForModal}}
        body={
        <BodyForModalCreateRules
          t={t}
          titleForSelect={titleForModal}
          exclusions={exclusionsCheckIn}
          check={checkIn}
          setCheck={setCheckIn}
          value={valueCheckIn}
          setValue={setValueCheckIn}
          minutes={minutes}
          startHours={startHours}
          endHours={endHours}
          validValue={validValue}
          validCheck={validCheck}
          typeOfCondition={typeOfCondition}
          setTypeOfCondition={setTypeOfCondition}
        />}
        actions={<DefaultModalActions
          cancelText={t('common.CANCEL')}
          submitText={t('common.SAVE')}
          onCancel={handleClose}
          onSubmit={handleApplyChange}
        />}
      />

      {/* Modal Edit*/}
      <ModalTemplate
        open={openModalEditRules}
        handleClose={handleClose}
        header={{ title: titleForModal}}
        body={
        <BodyForModalCreateRules
          t={t}
          titleForSelect={titleForModal}
          exclusions={exclusionsCheckIn}
          check={checkIn}
          setCheck={setCheckIn}
          value={valueCheckIn}
          setValue={setValueCheckIn}
          minutes={minutes}
          startHours={startHours}
          endHours={endHours}
          validValue={validValue}
          validCheck={validCheck}
          typeOfCondition={typeOfCondition}
          setTypeOfCondition={setTypeOfCondition}
        />}
        actions={<DefaultModalActions
          cancelText={t('common.CANCEL')}
          submitText={t('common.SAVE')}
          onCancel={handleClose}
          onSubmit={handleEdit}
        />}
      />
    </>
  )
}

export default ExtraStayViewCheckIn
