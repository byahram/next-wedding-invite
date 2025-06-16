export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours < 12 ? "오전" : "오후";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일 ${period} ${formattedHours}시 ${formattedMinutes}분`;
}
