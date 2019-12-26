//时间格式修改
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 解析分钟数
const formatMinute = value =>{
  var secondTime = parseInt(value)
  var minuteTime = 0
  if (secondTime > 60){
    minuteTime = parseInt(secondTime/60);
    secondTime = parseInt(secondTime%60);
  }
  return [ minuteTime, secondTime].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime,
  formatMinute
}
// console.log(formatMinute(94.632))