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

export const testStartEndTime = (context?: any) => {
  const startTime = context.parent.startTime ?? ''
  const endTime = context.parent.endTime ?? ''

  return testStartEndTimeStrings(startTime, endTime)
}

export const testStartEndTimeStrings = (startTime: string, endTime: string) => {
  // Convert to dates to make them easier to compare
  try {
    const fullStartDate = new Date(`2022/05/29 ${startTime}`)
    const fullEndDate = new Date(`2022/05/29 ${endTime}`)

    return fullStartDate < fullEndDate
  } catch (error) {
    return false
  }
}

export const buildDateString = (dateTime: Date | null) => {
  let date = ''

  try {
    // Allows it to fail for non date stuff and unexpecteds to return an empty string
    const unsafeDateTime = dateTime as any
    const year = unsafeDateTime.getFullYear()
    const month = (1 + (unsafeDateTime.getMonth() ?? 0))
      .toString()
      .padStart(2, '0')
    let day = unsafeDateTime.getDate().toString().padStart(2, '0')

    date = `${month}/${day}/${year}`
  } catch {}

  return date
}

export const buildTimeString = (dateTime: Date | null) => {
  let time = ''

  try {
    // Allows it to fail for non date stuff and unexpecteds to return an empty string
    const unsafeDateTime = dateTime as any
    const hours = unsafeDateTime.getHours()
    let minutes = unsafeDateTime.getMinutes()

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    time = `${hours}:${minutes}`
  } catch {}

  return time
}
