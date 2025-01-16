const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1FOZdya-n8Rv2GMBOqecv_rOA8swGGLUJE6hA_LYv6wg/export?format=csv&gid=157422094";
const IMAGE_URL = "https://cafeptthumb-phinf.pstatic.net/MjAyNDEyMjVfMjUz/MDAxNzM1MTAxOTExMDUy._ycsNE4JzaDfCfzEvNiK8Cl4UO-yPYuw4KXr2gkuDTgg.Nr8qrJ-ts8SYFpXAl0mcQ2knGK5kCjhzDrjHzRzwW20g.JPEG/IMG_3242.JPG?type=w1600";

const widget = new ListWidget();
const darkModeColor = new Color("#212121");
const lightModeColor = new Color("#79797a");

// 현재 다크모드 여부에 따라 배경 색상을 설정
widget.backgroundColor = Device.isUsingDarkAppearance() ? darkModeColor : lightModeColor;

// 스프레드시트에서 데이터를 가져옴
const response = await new Request(SPREADSHEET_URL).loadString();
const rows = response.split("\n").map(row => row.split(","));

// 오늘과 내일의 날짜 데이터를 가져옴
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const formatDate = date => `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
const formatKoreanDate = date => `${date.getMonth() + 1}월 ${date.getDate()}일`;
const todayStr = formatDate(today);
const tomorrowStr = formatDate(tomorrow);

const todayRow = rows.find(row => row[0] === todayStr);
const tomorrowRow = rows.find(row => row[0] === tomorrowStr);

// 오늘의 주제와 상태를 결정
let title = "";
let subtitle = "";
if (todayRow) {
  if (todayRow[1]?.trim() === "휴방") {
    title = "오늘은 휴방!";
  } else {
    title = "방송하는 날!";
    subtitle = `오늘의 주제: ${todayRow[1]?.trim() || "미정"}`;
  }
} else {
  title = "방송하는 날!";
  subtitle = "오늘의 주제: 미정";
}

// 다음 주제와 일정 설정
const nextSchedule = `다음 일정: ${formatKoreanDate(tomorrow)}`;
const nextTopic = `다음 주제: ${tomorrowRow ? (tomorrowRow[1]?.trim() || "미정") : "미정"}`;

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

textStack.addSpacer(10);
const nextScheduleText = textStack.addText(nextSchedule);
nextScheduleText.font = Font.systemFont(16); // 폰트 크기를 16로 설정
nextScheduleText.leftAlignText();

textStack.addSpacer(5);
const nextTopicText = textStack.addText(nextTopic);
nextTopicText.font = Font.systemFont(16); // 폰트 크기를 16로 설정
nextTopicText.leftAlignText();

// 위젯을 화면에 표시
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentSmall();
}
Script.complete();