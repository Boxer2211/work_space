

export const generateTimeForSelect = ( minutes, startHours, endHours) => {

  /**
   * minutes - Параметр хвилин за замовчуванням - 30
   * @type {number}
   * @example 30
   */

  /**
   * startHours - параметр з якої години генерувати
   * @type {number}
   * @example 14
   */

  /**
   * endHours - параметр до якої години генерувати
   * @type {number}
   * @example 24
   */

    const interval = minutes || 30;
    const options = [];

    for (let h = startHours; h < endHours; h++) {
      for (let m = 0; m < 60; m += interval) {
        const hour = `0${h}`.slice(-2); // Додаємо нуль перед годинами
        const minute = `0${m}`.slice(-2); // Додаємо нуль перед хвилинами
        const time = `${hour}:${minute}`;

        options.push(time);

        // if (!exclusions.includes(time)) { // Виключення
        //   options.push(time);
        // }
      }
    }

    return options
}


export const isValueNotNull = (value) => {
  return value !== null && value !== '' && value !== ' '
}

export const sortArrayConditionsByTime = (arr) => {

  return arr?.length > 1 ? [...arr].sort((a, b) => a.time.localeCompare(b.time)) : arr
}
