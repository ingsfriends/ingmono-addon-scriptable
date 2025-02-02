const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1FOZdya-n8Rv2GMBOqecv_rOA8swGGLUJE6hA_LYv6wg/export?format=csv";
const IMAGE_URL = "https://cafeptthumb-phinf.pstatic.net/MjAyNDEyMjVfMjUz/MDAxNzM1MTAxOTExMDUy._ycsNE4JzaDfCfzEvNiK8Cl4UO-yPYuw4KXr2gkuDTgg.Nr8qrJ-ts8SYFpXAl0mcQ2knGK5kCjhzDrjHzRzwW20g.JPEG/IMG_3242.JPG?type=w1600";

const widget = new ListWidget();
const darkModeColor = new Color("#212121");
const lightModeColor = new Color("#79797a");

// 현재 다크모드 여부에 따라 배경 색상을 설정
widget.backgroundColor = Device.isUsingDarkAppearance() ? darkModeColor : lightModeColor;

// 스프레드시트에서 데이터를 가져옴
const response = await new Request(SPREADSHEET_URL).loadString();
const rows = response.split("\n").map(row => row.split(","));

// 오늘과 내일의 날짜 데이터를 가져온당
// - 행렬이 추가될 일이 없음으로 인덱스들을 하드코딩 해버린당
// - 뻑나면 사용하는 잉모노가 그때 알아서 하겠지 뭐 히히
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth()+1;
const todayDay = today.getDate();

const dataYear = rows[0][3];
const dataMonth = rows[0][13];

const formatKoreanDate = date => `${date.getMonth() + 1}월 ${date.getDate()}일`;

let title = "";
let subtitle = "";
let nextSchedule = "";
let nextTopic = "";

if (todayYear == dataYear && todayMonth == dataMonth) {
  // 오늘 날짜 기준 연도 및 월 기준으로 맞는 엑셀 데이터!
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // 엑셀에 새로운 행렬이 추가되지 않는 가정 하, 필요한 칸들만 `days`와 `values`에 담는당
  const dayRowIndices = [2, 5, 8, 11, 14, 17];
  const valueRowIndices = [3, 6, 9, 12, 15, 18];
  const columnIndices = [3, 8, 13, 18, 23, 28, 33];

  const days = dayRowIndices.flatMap(rowIdx => columnIndices.map(colIdx => rows[rowIdx][colIdx].trim()));
  const values = valueRowIndices.flatMap(rowIdx => columnIndices.map(colIdx => rows[rowIdx][colIdx].trim()));

  // 이번 달의 1일부터 마지막 날까지 필터링한당
  const firstDayIndex = days.findIndex(day => day === "1");
  const lastDayIndex = days.slice(firstDayIndex + 1).findIndex(day => day === "1");
  const rangeEnd = lastDayIndex !== -1 ? firstDayIndex + 1 + lastDayIndex : days.length;

  const daysInMonth = days.slice(firstDayIndex, rangeEnd);
  const valuesInMonth = values.slice(firstDayIndex, rangeEnd);

  const todayIndex = daysInMonth.indexOf(todayDay.toString());

  // 오늘의 주제와 상태를 결정
  if (todayIndex !== -1) {
    title = valuesInMonth[todayIndex] === "휴방" ? "오늘은 휴방!" : "방송하는 날!";
    subtitle = valuesInMonth[todayIndex] !== "휴방" ? `오늘의 주제: ${valuesInMonth[todayIndex] || "미정"}` : "";
  }

  // 다음 주제와 일정 설정
  if (todayIndex < daysInMonth.length - 1) {
    nextSchedule = `다음 일정: ${formatKoreanDate(tomorrow)}`;
    nextTopic = valuesInMonth[todayIndex + 1] === "휴방" ? "다음날은 휴방!" : `다음 주제: ${valuesInMonth[todayIndex + 1] || "미정"}`;
  }
} else {
  // 오늘 날짜 기준 연도 및 월 기준으로 맞지 않는 엑셀 데이터 ㅠㅠ
  title = "이번 달 일정을 못 가져왔어요 ㅠㅠ";
  subtitle = "URL을 갱신해보세요!";
}

// 이미지와 텍스트를 위한 수평 레이아웃 생성
const mainStack = widget.addStack();
mainStack.layoutHorizontally();
mainStack.centerAlignContent();

// 이미지를 왼쪽에 추가
if (IMAGE_URL) {
  const imageReq = await new Request(IMAGE_URL).loadImage();
  const img = mainStack.addImage(imageReq);
  img.cornerRadius = 10;
  img.resizable = true;
  img.imageSize = new Size(140, 140); // 이미지 크키 설정
  mainStack.addSpacer(10); // 이미지와 텍스트 사이 간격 추가
}

// 텍스트를 위한 스택 생성
const textStack = mainStack.addStack();
textStack.layoutVertically();
textStack.centerAlignContent();

// 제목과 부제목 추가
const titleText = textStack.addText(title);
titleText.font = Font.boldSystemFont(16); // 폰트 크기를 16로 설정
titleText.leftAlignText();

if (subtitle) {
  textStack.addSpacer(5);
  const subtitleText = textStack.addText(subtitle);
  subtitleText.font = Font.systemFont(16); // 폰트 크기를 16로 설정
  subtitleText.leftAlignText();
}

if (nextSchedule) {
  textStack.addSpacer(10);
  const nextScheduleText = textStack.addText(nextSchedule);
  nextScheduleText.font = Font.systemFont(16); // 폰트 크기를 16로 설정
  nextScheduleText.leftAlignText();
}

if (nextTopic) {
  textStack.addSpacer(5);
  const nextTopicText = textStack.addText(nextTopic);
  nextTopicText.font = Font.systemFont(16); // 폰트 크기를 16로 설정
  nextTopicText.leftAlignText();
}

// 위젯을 화면에 표시
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentSmall();
}
Script.complete();