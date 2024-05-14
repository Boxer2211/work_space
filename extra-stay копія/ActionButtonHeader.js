import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonIconText from 'src/@core/components/ButtonIconText';
import DefaultModalActions from 'src/@core/components/modal/DefaultModalActions';
import ModalTemplate from 'src/@core/components/modal/ModalTemplate';
import { useCustomToaster } from 'src/@core/hooks/useCustomToaster';
import { setStoreExtraStay } from 'src/store/extraStay';
import { sortArrayConditionsByTime } from 'src/views/extra-stay/utilsForExtraStay';


const ActionButtonHeader = ({
    editMode,
    setEditMode,
    t,
    extraStayConditions,
    extraStayConditionsCheckIn,
    setExtraStayConditionsCheckIn,
    extraStayConditionsCheckOut,
    setExtraStayConditionsCheckOut,
    propertyId

}) => {
  const dispatch = useDispatch()
  const { toastError, toastSuccess } = useCustomToaster()
  const { data: session } = useSession()
  const token = session?.user?.token

  const [openModalCancel, setOpenModalCancel] = useState(false)

  useEffect( () => {
    handleResetConditions()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraStayConditions]);

  const buildObjectToSend = (checkInRules, checkOutRules) => {
   return [...checkInRules, ...checkOutRules]
  }

  const handleCancel = () => {
    const unitedConditions = buildObjectToSend(extraStayConditionsCheckIn, extraStayConditionsCheckOut)

    const hasConditionsNewItem = !!unitedConditions?.find(obj => obj.newItem)
    const hasConditionsEditItem = !!unitedConditions?.find(obj => obj.editItem)
    const hasConditionsDeleteItem = unitedConditions?.length !== extraStayConditions?.length

    if(hasConditionsNewItem || hasConditionsEditItem || hasConditionsDeleteItem){
      return setOpenModalCancel(true)
    } else {
      setEditMode(false)
    }
  }

  const handleResetConditions = () => {
    const filteredConditionByTypeCheckIn = sortArrayConditionsByTime(extraStayConditions?.check_in_conditions)
    const filteredConditionByTypeCheckOut = sortArrayConditionsByTime(extraStayConditions?.check_out_conditions)

    setExtraStayConditionsCheckIn(
      filteredConditionByTypeCheckIn
    )

    setExtraStayConditionsCheckOut(
      filteredConditionByTypeCheckOut
    )
    setOpenModalCancel(false)
    setEditMode(false)
  }

  const handleSubmit = () => {

    const conditionsCheckIn = extraStayConditionsCheckIn.map((item) => {

      return {
        time: item.time,
        value: item.value,
        type: item.type
      }
    })

    const conditionsCheckOut = extraStayConditionsCheckOut.map((item) => {

      return {
        time: item.time,
        value: item.value,
        type: item.type
      }
    })


    const dataForSend = {
      property_id: propertyId,
      check_in_conditions: conditionsCheckIn,
      check_out_conditions: conditionsCheckOut
    }

    dispatch(setStoreExtraStay({data: dataForSend, token}))
      .unwrap()
      .then(() => toastSuccess())
      .then(() => setEditMode(false))
      .catch(error => toastError(error.message))
  }

  return (
    <>
      {
        !editMode
        ? <ButtonIconText
            onClick={() => setEditMode(true)}
          >
            {t('common.EDIT_ACTION')}
          </ButtonIconText>
        : <Box sx={{display: 'flex', '>*': { marginRight: 4 }}}>
            <ButtonIconText
              onClick={handleSubmit}
            >
              {t('common.SAVE')}
            </ButtonIconText>
            <ButtonIconText
              variant='outlined'
              onClick={handleCancel}
            >
              {t('common.CANCEL')}
            </ButtonIconText>
          </Box>
      }
      <ModalTemplate
        open={openModalCancel}
        handleClose={() => setOpenModalCancel(false)}
        header={{ title: 'Close edit mode'}}// todo add translate
        body={'Are you sure close without save?'} // todo add translate
        actions={<DefaultModalActions
          colorSubmit={'secondary'}
          variantSubmit={'outlined'}
          cancelText={'No, wait'}// todo add translate
          submitText={'Yes, cancel'}// todo add translate
          onCancel={() => setOpenModalCancel(false)}
          onSubmit={handleResetConditions}
        />}
      />
    </>
  )
}

export default ActionButtonHeader
