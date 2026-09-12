# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. 依使用者需求，將精選菜單中招牌芒果雞的菜色描述移除白飯與青花菜（white rice & steamed broccoli），使焦點完全專注於酥脆多汁的芒果雞本體。
2. 使用者提供真實芒果雞招牌菜品照片（`G:\My Drive\Fanny\mango_chicken.jpg`），已複製納入專案資產庫 `assets/dishes/mango_chicken.jpg`，並鏡像替換舊圖 `1000067570.png`。
3. 更新 `index.html` 首屏 Hero Card 與精選菜單 Menu Card 之芒果雞圖片路徑為 `assets/dishes/mango_chicken.jpg?v=1.1.0`，並將 CSS/JS 版本號遞增至 `v=1.0.4` 防止客戶端快取。
4. 依使用者決策採用方案 C，將首屏第三個指標調整為 ` #1 ` • ` Mango Chicken Favorite `，集中凸顯全喬治亞州最受歡迎的招牌明星菜品。

## 🚦 目前狀態
芒果雞照片已替換為真實料理照片，菜單說明文字已精準修訂完畢，並同步推送到 GitHub Pages。

## ➡️ 下一步
1. 請使用者在線上預覽網址（https://tp1c.github.io/wok-dragon/）確認芒果雞文案與新照片視覺效果。
2. 規劃菜單價格標示或線上點餐/外帶預約方案。
3. 補充更多品牌故事細節或特色餐點。

## ⚠️ 注意事項
- 料理與活動圖片均存放於 `assets/dishes/` 並已由 Git 進行版本控制，不依賴易失效的外部連結。
- 本專案未變更或覆蓋既有線上營運中的 wokdragon.com 正式網站。

## 🕐 最後更新
- 時間：2026-09-12 17:32
- 更新者：Antigravity @ DESKTOP-V8U57EU
- Git push：✅ 已推
