# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. 重構全站菜品亮點標籤（`Signature #1`、`Top Seller`、`Classic`、`Crispy & Creamy`、`House Special`、`Golden Crisp` 等）配色系統：
   - 採用**黑曜岩高對比暗色膠囊基底**（`rgba(14, 14, 20, 0.92)` 搭配 `backdrop-filter: blur(10px)` 與投影）。
   - 徹底解決淺色背景照片（如 Sweet & Sour Chicken 白餐布、Crab Rangoons 奶白盤、春捲白石板等）中文字被洗掉（0對比）的辨識問題。
   - 強化金色、亮黃、珊瑚紅、薄荷綠細緻邊框與飽和發光文字，無論在明亮、深色或複雜圖樣背景皆具備 WCAG AAA 級別超高可讀性與奢華餐飲質感。
2. 依使用者需求拉遠芒果雞鏡頭視角（Zoom out）：採用更廣角且含完整炒鍋/餐碗輪廓的最新實拍照（`mango_chicken_2.jpg`）更新至資產庫，並以 `object-position: center 20%` 最佳化取景。
3. 全站樣式與腳本防快取版本遞增至 `v=1.0.6`，確保訪客瀏覽器立即取得最新高對比標籤樣式。

## 🚦 目前狀態
菜品浮動標籤（Badge Tags）配色系統全面升級為黑曜岩高對比度方案，已完美修復淺色照片上的文字閱讀性，並已推送到 GitHub Pages。

## ➡️ 下一步
1. 請使用者在線上預覽網址（https://tp1c.github.io/wok-dragon/）確認標籤在高對比暗底金色系下的可讀性與美感。
2. 規劃菜單價格標示或線上點餐/外帶預約方案。
3. 補充更多品牌故事細節或特色餐點。

## ⚠️ 注意事項
- 料理與活動圖片均存放於 `assets/dishes/` 並已由 Git 進行版本控制，不依賴易失效的外部連結。
- 本專案未變更或覆蓋既有線上營運中的 wokdragon.com 正式網站。

## 🕐 最後更新
- 時間：2026-09-12 22:55
- 更新者：Antigravity @ DESKTOP-V8U57EU
- Git push：✅ 已推
