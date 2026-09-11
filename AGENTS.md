# Wok Dragon（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介
Wok Dragon 餐飲品牌企劃，涵蓋品牌核心定位、品牌概念發想、視覺風格與識別設計、菜單結構與特色料理規劃，以及後續行銷營運推進策略。

## 關鍵時程
<!-- 格式：- 事件名稱：日期（說明）；沒有就留白 -->

## 目標與路線圖
<!-- 用 checklist 追蹤，收工技能會更新這裡 -->
- [ ] 階段一：品牌核心定位與目標客群分析（市場區隔、品牌故事與價值主張）
- [ ] 階段二：品牌視覺與空間概念規劃（風格調性、識別元素、菜單設計架構）
- [ ] 階段三：菜色設計與營運推廣方案（核心菜品組合、定價策略、上線行銷方案）

## 專案範疇 (Scope Rules)
- **Scope discipline**: Only read files I explicitly name or point to. Do not read additional files to "get context," "understand the project," or "see how things connect" unless I ask you to. If you think reading more files would help, ask first. One sentence: "Want me to also read X?" Wait for my answer. This applies to every task in this project. No exceptions for "just checking" or "quick look."
- **Context Reset**: Task complete. Run `/clear` before your next task to reset context. (Keep this reminder line at the end of every response.)

## 資料夾結構
<!-- 初始化時自動掃描生成，之後新增檔案要更新 -->
```text
Wok Dragon/
├── AGENTS.md        # 專案藍圖
├── handoff.md       # 跨 session / 跨裝置交接檔
└── .gitignore       # Git 忽略清單
```

## 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|------|------|------|---------|
| L1 | 本地（GDrive） | `AGENTS.md`＋`handoff.md` | 每個 session |
| L2 | GitHub | `tp1c/wok-dragon` | 指定時 |
| L3 | Obsidian | `Wok Dragon/專案工作流程.md` | 有需要時 |

## 工作約定
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 修改共用檔案前先讀最新內容，避免覆蓋其他 Agent 的變更
- 所有回應與文件使用繁體中文
- 修改前先確認計畫，優先保留原有資料結構
