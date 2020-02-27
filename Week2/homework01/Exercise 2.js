const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];



const hourlyRate = 25;
function calculateMoney(taskObject, hourRate) {
  let totalDuration = 0;
  let totalHour = 0;
  const euro = '€';
  taskObject.map(item => (totalDuration += item.duration));
  totalHour = totalDuration / 60;
  const earnedMoney = (totalHour * hourRate).toFixed(2);
  return euro + earnedMoney;
}
console.log(calculateMoney(mondayTasks, hourlyRate));


