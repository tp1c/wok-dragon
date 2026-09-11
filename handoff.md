# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. 修正頂部 Header 品牌 Logo（WOK DRAGON）與導覽選單第一項「Home」重疊擠壓之版面問題。
2. 替 `.brand-logo`、`.header-actions` 加入 `flex-shrink: 0` 與 `white-space: nowrap` 邊界保護，並為 `.header-inner` 設定安全間距 `gap: 1.5rem`。
3. 優化跨裝置 RWD 響應式斷點：
   - 1025px～1200px（筆電與窄視窗）：緊湊化選單間距、隱藏次要電話連結，確保完全不溢出。
   - ≤ 1024px（平板與小筆電）：全面切換為側邊抽屜導覽（Mobile Drawer）與漢堡選單。
   - ≤ 480px（手機螢幕）：微調 Logo 尺寸與 CTA 按鈕內距，適配單手持握與窄屏顯示。

## 🚦 目前狀態
已修復完成並推送到 GitHub，GitHub Pages 自動部署更新中（https://tp1c.github.io/wok-dragon/）。在任何解析度（寬螢幕、筆電、平板橫向/直向、手機）下 Logo 與導覽選單均不會發生重疊。

## ➡️ 下一步
1. 請使用者在線上預覽網址（https://tp1c.github.io/wok-dragon/）重新整理並檢查各螢幕解析度下的 Header 表現。
2. 規劃菜單價格標示或線上點餐/外帶預約方案。
3. 補充更多品牌故事細節或特色餐點。

## ⚠️ 注意事項
- 料理與活動圖片均存放於 `assets/dishes/` 並已由 Git 進行版本控制，不依賴易失效的外部連結。
- 本專案未變更或覆蓋既有線上營運中的 wokdragon.com 正式網站。

## 🕐 最後更新
- 時間：2026-09-11 15:14
- 更新者：Antigravity @ DESKTOP-V8U57EU
- Git push：✅ 已推
