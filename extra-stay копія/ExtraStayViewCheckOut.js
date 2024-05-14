import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent, timelineOppositeContentClasses,
  TimelineSeparator
} from '@mui/lab';
import MuiTimeline from '@mui/lab/Timeline';
import { Card, CardContent } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
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

const ExtraStayViewCheckOut = ( {
    editMode,
    t,
    settingCheckOutTime,
    settingStepInMinutes,
    extraStayConditionsCheckOut,
    setExtraStayConditionsCheckOut
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

    const arrForExclusions = extraStayConditionsCheckOut?.map((item) => item.time)

    setExclusionsCheckIn(arrForExclusions)
  }, [extraStayConditionsCheckOut] );

  const titleForModal = 'CHECK_OUT'//todo add trans

  const minutes = parseInt(settingStepInMinutes) // крок в хвилинах з якого генерувати час в модалках
  const startHours = parseInt(settingCheckOutTime?.split(':')[0], 10) // параметр з якої години генерувати час в модалці
  const endHours = 24 // параметр до якої години генерувати час в модалці

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
    if(isValueNotNull(checkIn)) {
      setExclusionsCheckIn((prev) => [...prev, checkIn])
      setExtraStayConditionsCheckOut((prev) => {
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
    setExtraStayConditionsCheckOut((prev) => prev.filter((item) => item.time !== timeToDelete))
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

      setExtraStayConditionsCheckOut((prev) => {

        const updatedArray = prev.map((item) => {
          if (item.time === editTime) {
            return {
              ...item,
              time: checkIn,
              value: valueCheckIn,
              type: typeOfCondition,
              editItem: !item.newItem ? true : item.editItem,
            };
          }

          return item;
        })

        return sortArrayConditionsByTime(updatedArray);
      })

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
            title={t('extraStay.LATE_CHECK_IN')}
            setOpenModalCreateRules={setOpenModalCreateRules}
          />
          <Divider sx={{ mt: 3 }}/>
          <Timeline sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}>
            <TimelineStartItem time={`${startHours}:00`}/>
            {
              extraStayConditionsCheckOut?.map((item) => (
                <TimelineItem key={item.time}>
                  <TimelineOppositeContent sx={{minWidth: '76px'}}>
                    {item.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color='primary' />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    padding: '0 8px',
                    mt: '-40px !important',
                    mb: '40px !important',
                    minWidth: '150px',
                    backgroundColor: item.newItem
                      ? 'rgba(0, 128, 0, 0.5)'
                      : item.editItem
                        ? 'rgba(0, 0, 255, 0.1)'
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
            <TimelineEndItem time={'23:59'} notAllow={true}/>

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

export default ExtraStayViewCheckOut
