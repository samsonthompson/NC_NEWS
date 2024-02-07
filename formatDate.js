import dayjs from 'dayjs'

export const formatDate = (timeStamp) => {
    const date = dayjs(timeStamp)
    console.log(date, "<<<date");
    const relativeTime = date.fromNow()
    console.log(relativeTime, '<<< relative time');
    return relativeTime
}
