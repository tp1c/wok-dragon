# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. 修正「Explore our menu」中點擊「Chef's Specials」無料理顯示之分類篩選問題：
   - 原 `js/main.js` 中的 `initMenuFilter()` 僅使用嚴格字串相等比對（`cardCategory === filterValue`）。
   - 主廚特選等菜品因包含多標籤（如 `specials chicken`、`specials sides`），字串比對失敗而無法顯示。
   - 改進為多標籤分割包含比對（`categories.includes(filterValue)`），讓「Chef's Specials」（顯示 Mango Chicken、Bourbon Chicken、Dragon Fries）、「Chicken Meals」與「Sides & Appetizers」皆能精準篩選多標籤料理。
2. 頂部 Header 品牌 Logo（WOK DRAGON）與導覽選單第一項「Home」重疊擠壓排版已完成修復並完成跨裝置 RWD 斷點設定。

## 🚦 目前狀態
已修復完成並推送到 GitHub，GitHub Pages 自動部署更新中（https://tp1c.github.io/wok-dragon/）。菜單分類（All Specialties、Chef's Specials、Chicken Meals、Sides & Appetizers、Rice & Noodles、Bubble Tea & Drinks）皆具備滑順的淡入縮放過渡動畫且 100% 正常篩選。

## ➡️ 下一步
1. 請使用者在線上預覽網址（https://tp1c.github.io/wok-dragon/）重新整理，測試菜單各分類按鈕切換效果。
2. 規劃菜單價格標示或線上點餐/外帶預約方案。
3. 補充更多品牌故事細節或特色餐點。

## ⚠️ 注意事項
- 料理與活動圖片均存放於 `assets/dishes/` 並已由 Git 進行版本控制，不依賴易失效的外部連結。
- 本專案未變更或覆蓋既有線上營運中的 wokdragon.com 正式網站。

## 🕐 最後更新
- 時間：2026-09-11 15:23
- 更新者：Antigravity @ DESKTOP-V8U57EU
- Git push：✅ 已推
