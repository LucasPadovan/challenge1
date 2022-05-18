export const timeRegex = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/
export const dateRegex =
  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

export const TIME_DELIMITER = ':'

export const testTimeEntry = (value?: string) => {
  let result = false

  if (value) {
    const [hours, minutes] = value.split(TIME_DELIMITER)

    if ((parseInt(hours) < 24 && parseInt(minutes) < 60) || !minutes) {
      result = true
    }
  }

  return result
}
