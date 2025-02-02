# 우정잉 스크립터블 위젯 Scriptable for Friendship+ing

- <img src="https://static-cdn.jtvnw.net/emoticons/v2/753147/static/light/2.0" alt="💡" style="width: 1em; height: auto;"> [스크립터블](https://apps.apple.com/kr/app/scriptable/id1405459188)이 무엇인가요? What is [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188)?
  - 자바스크립트를 사용하여 원하는 기능을 프로그래밍한 후, 이를 홈 화면 위젯 등 다양한 형태로 iOS에서 사용할 수 있게 도와주는 앱입니다. It is an app that allows you to use JavaScript to program desired functions and then use them in various forms, such as home screen widgets, on iOS.
  - 인터넷에서 데이터를 가져오고, 주기적으로 새로 고침하여 실시간 정보를 반영하는 위젯을 간단한 프로그래밍으로 구현할 수 있습니다. You can implement widgets that fetch data from the internet and refresh periodically to reflect real-time information with simple programming.

- <img src="https://static-cdn.jtvnw.net/emoticons/v2/652905/static/light/2.0" alt="🤔" style="width: 1em; height: auto;"> 이 레포는 무슨 용도인가요? What is this repository for?
  - 이 레포는 우정잉 덕질에 도움이 될 만한 기능을 스크립터블을 통해 iOS 위젯으로 만든 것입니다. This repository is for creating iOS widgets through Scriptable that help stanning Friendship+ing.
  - 코딩을 잘 모르는 잉모노들도 아이디어만 있다면 챗지피티를 통해 해당 기능을 코드로 구현하여 iOS 위젯으로 만들 수 있습니다. Even the Ingmonos who do not know programming at all can turn their ideas into code using ChatGPT and create iOS widgets.

## <img src="https://static-cdn.jtvnw.net/emoticons/v2/772738/static/light/2.0" alt="📁" style="width: 1em; height: auto;"> 프로젝트 구조 Project Structure

본 레포지토리 구조와 각 폴더 및 파일에 대한 설명입니다 Here's the structure of the repository along with explanations for each folder and file:

```
ingmono-addon-scriptable/
│
├── 📂 scripts/
│   ├── 📄 today_broadcast.js      # Main script for today's broadcast widget
│   └── 📄 ...                     # Newly added JS scripts go here
│
├── 📄 README.md                   # Project description and usage instructions
├── 📄 LICENSE                     # License information for the repository
└── 📄 .gitignore                  # Files and folders to ignore in Git
```

### <img src="https://static-cdn.jtvnw.net/emoticons/v2/1210205/static/light/2.0" alt="🔍" style="width: 1em; height: auto;"> 폴더 및 파일 설명 Folder and File Explanations

- **📂 scripts/**: 스크립터블에서 사용할 모든 자바스크립트 코드 파일을 포함합니다 Contains all JavaScript scripts for use with Scriptable.
  - **📄 today_broadcast.js**: iOS 홈 화면에 오늘 방송 알리미 위젯을 표시합니다 Displays today's broadcast widget for the iOS home screen.

- **📄 README.md**: 이 파일입니다 This file! 본 레포지토리의 개요와 사용 방법을 설명합니다 It contains an overview of the repository and instructions for usage.

- **📄 LICENSE**: 이 프로젝트의 라이센스 조건을 명시합니다 Specifies the licensing terms for this project.

- **📄 .gitignore**: 깃을 통해 버젼 관리를 하지 않을 파일과 폴더를 명시합니다 Lists files and folders that should be ignored by Git.

---

## <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4f5e00cfbf214ccebf3222930224dad2/animated/light/2.0" alt="✨" style="width: 1em; height: auto;"> 예시 스크립트 Example Scripts

### 🌤️ [오늘 방송일정 위젯 Today's Broadcast Widget](./scripts/today_broadcast.js)
오늘과 내일의 방송 정보를 알려주는 위젯입니다. A widget that fetches and displays today and tomorrow's broadcast information.

- 원 코드 정보 original code info: [담친쓰 Ingchins at Daum](https://cafe.daum.net/ingsfriend/sUaB/1792)
  - 담친쓰 애명전 글에서 아이디어를 얻어 작업했습니다 This work started from an article from Baby Hall of Fame, Ingchins at Daum.
  - 코드는 챗지피티를 이용해 처음부터 새로 짰습니다 The script was written from scratch with ChatGPT.

---

## <img src="https://static-cdn.jtvnw.net/emoticons/v2/1009996/static/light/2.0" alt="🚀" style="width: 1em; height: auto;"> 시작하기 Getting Started

### <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4fd1f3fb6fab406280ae80986395f10f/animated/light/2.0" style="width: 1em; height: auto;"> 스크립트 추가하기 Adding a Script
1. iOS 장치에서 스크립터블을 엽니다 Open Scriptable on your iOS device.
2. **+** 버튼을 눌러 새 스크립트를 생성합니다 Create a new script by tapping the **+** button.
3. 원하는 스크립트의 내용을 복사하여 편집기에 붙여넣습니다 Copy and paste the content of the desired script into the editor.
4. 알아볼 수 있는 파일명으로 스크립트를 저장합니다 Save the script with a meaningful name.

### <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_112000e1502344fcb57fbf383330b48d/animated/light/2.0" style="width: 1em; height: auto;"> 위젯 추가하기 Adding a Widget
1. iOS 홈 화면에 스크립터블 위젯을 추가합니다 Add a Scriptable widget to your iOS home screen.
2. 위젯을 편집하고, 스크립트를 선택한 후 필요한 매개변수를 설정합니다 Edit the widget, select the script, and configure any required parameters.
3. 커스텀 위젯을 즐기세요 Enjoy your customized widget!

---

## <img src="https://static-cdn.jtvnw.net/emoticons/v2/936129/static/light/2.0" alt="📜" style="width: 1em; height: auto;"> License

이 프로젝트는 [잉모노 라이센스](./LICENSE) 하에 라이센스가 부여됩니다 This project is licensed under the [Ingmono License](./LICENSE).

---

## <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3cf5c1215a014392a66552ae4a1f1b38/static/light/2.0" alt="🤝" style="width: 1em; height: auto;"> Contributions

창의적인 아이디어들을 기여해주세요 Creative contributions are welcome! 레포지토리를 복사하고, 수정사항을 제출하거나, 개선 사항을 제안하는 이슈를 열어 주세요 Feel free to fork the repository, submit pull requests, or open issues to suggest improvements.

---

## <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_d2d411e79f1b45d48935f56bd4834a10/animated/light/2.0" alt="🛠️" style="width: 1em; height: auto;"> 도구 및 자료 Tools and Resources
- [스크립터블 다큐멘테이션 Scriptable Documentation](https://docs.scriptable.app/)
- [자바스크립트 튜토리얼 JavaScript Tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [깃허브 가이드 GitHub Guide](https://guides.github.com/)
- [코딩알못들의 영원한 친구, 챗지피티 ChatGPT, the best coding buddy for dummies](https://chatgpt.com/)