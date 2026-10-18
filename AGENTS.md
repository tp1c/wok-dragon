# Wok Dragon（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介
Wok Dragon 餐飲品牌企劃，涵蓋品牌核心定位、品牌概念發想、視覺風格與識別設計、菜單結構與特色料理規劃，以及後續行銷營運推進策略。

## 關鍵時程
<!-- 格式：- 事件名稱：日期（說明）；沒有就留白 -->

## 目標與路線圖
<!-- 用 checklist 追蹤，收工技能會更新這裡 -->
- [x] 階段一：品牌核心定位與目標客群分析（市場區隔、品牌故事與價值主張）
- [x] 階段二：品牌視覺與跨裝置官網原型規劃（風格調性、識別元素、菜單設計架構、現代化響應式 Markup）
- [ ] 階段三：菜色設計與營運推廣方案（核心菜品組合、定價策略、上線行銷方案）

## 專案範疇 (Scope Rules)
- **Scope discipline**: Only read files I explicitly name or point to. Do not read additional files to "get context," "understand the project," or "see how things connect" unless I ask you to. If you think reading more files would help, ask first. One sentence: "Want me to also read X?" Wait for my answer. This applies to every task in this project. No exceptions for "just checking" or "quick look."
- **Context Reset**: Task complete. Run `/clear` before your next task to reset context. (Keep this reminder line at the end of every response.)

## 資料夾結構
<!-- 初始化時自動掃描生成，之後新增檔案要更新 -->
```text
Wok Dragon/
├── .agents/         # AI 虛擬員工團隊角色規格
│   ├── core_developer.md     # 核心研發工程師規格
│   ├── knowledge_keeper.md   # 知識庫秘書規格
│   ├── ops_secretary.md      # 雲端營運秘書規格
│   ├── qa_reviewer.md        # 代碼與品管審查員規格
│   └── tech_planner.md       # 架構規劃師規格
├── .tasks/          # 任務黑板與卡片
│   └── template.md           # 任務卡標準範本
├── docs/            # 協同通訊協議與技術規範
│   └── TASK_PROTOCOL.md      # 任務派發與多 Agent 通訊協議
├── Doc/             # 原始品牌設計資產與字型/網域設定
├── AGENTS.md        # 專案藍圖
├── handoff.md       # 跨 session / 跨裝置交接檔
├── .gitignore       # Git 忽略清單
├── index.html       # 現代化響應式單頁官網原型 (HTML5)
├── assets/
│   └── dishes/      # 官方料理與節慶活動相片牆本地圖資
├── css/
│   └── style.css    # 現代東方黑金設計系統、微動畫與跨裝置 RWD 樣式
├── js/
│   └── main.js      # 抽屜導覽、菜單多標籤即時分類、即時美東營業時間、雙分店切換
└── pics/            # 使用者上傳備用高解析圖資 (如 Bourbon Chicken 實拍照)
```

## AI 虛擬員工團隊 (AI Employees Team)
本專案已整合多 Agent 虛擬員工團隊與黑板模式協同管線：

| 角色名稱 | 規格定義檔 | 職責與專案任務 |
| :--- | :--- | :--- |
| **架構規劃師 (Tech Planner)** | `.agents/tech_planner.md` | 拆解品牌功能與網站架構規格、開立任務卡 (`.tasks/TASK-xxx.md`) |
| **核心研發員 (Core Developer)** | `.agents/core_developer.md` | 前端 HTML/CSS/JS 代碼編寫、功能模組實作、響應式動態設計 |
| **代碼與品管審查員 (QA Reviewer)** | `.agents/qa_reviewer.md` | 代碼審查、視覺對比與無障礙 (WCAG) 檢查、跨瀏覽器與 RWD 驗收 |
| **雲端營運秘書 (Ops Secretary)** | `.agents/ops_secretary.md` | 外部需求情報擷取、GitHub Issue 追蹤、線上部屬與監控 |
| **知識庫秘書 (Knowledge Keeper)** | `.agents/knowledge_keeper.md` | 專案交接維護、`AGENTS.md` / `handoff.md` 同步、Obsidian 雙腦歸檔 |

### 任務黑板模式 (Blackboard Protocol)
- 任務派發依循 [TASK_PROTOCOL.md](file:///c:/Data/Home/Antigravity/Wok%20Dragon/docs/TASK_PROTOCOL.md)。
- 任何跨階段或大型模組變更，一律由 Planner 依 `.tasks/template.md` 建立具體任務卡，由 Developer 實作、QA 驗收後歸檔。

## 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|------|------|------|---------|
| L1 | 本地（GDrive） | `AGENTS.md`＋`handoff.md` | 每個 session |
| L2 | GitHub | `tp1c/wok-dragon`（Pages: `https://tp1c.github.io/wok-dragon/`） | 指定時 |
| L3 | Obsidian | `Wok Dragon/專案工作流程.md` | 有需要時 |

## 工作約定
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 修改共用檔案前先讀最新內容，避免覆蓋其他 Agent 的變更
- 所有回應與文件使用繁體中文
- 修改前先確認計畫，優先保留原有資料結構
