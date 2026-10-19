# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. **完成全站視覺風格重構（Sweetgreen 現代自然白綠簡約風格）**：
   - 移除舊版黑金調性，採用現代純淨米白（Warm Alabaster）、甘藍深綠（Kale Forest）與鮮活草木綠（Leaf Lime）。
   - 整合 Gotham Rounded 圓體字型，建立清新且高轉換率的現代輕食/精緻快餐視覺體系。
   - 更新全站導覽列、頁尾社群連結、雙分店切換與聯絡表單（Contact Us）。
2. **客製化料理照片重新生成與替換（AI 精準繪圖與修圖）**：
   - **Vegetable Lo Mein**、**Signature Fried Rice**、**Mango Chicken** 已全數升級為高質感美饌照片，並置入 [assets/dishes/](file:///c:/Data/Home/Antigravity/Wok%20Dragon/assets/dishes/)。
   - "Our Story" 區塊的 "Wok Hei" 調整為更加符合美式習慣的描述："The Art of Wok-Fired Cooking" 與 "authentic wok-tossed dishes"。
3. **多平台外送訂餐模態窗（Online Ordering Modal）與分店連結校正**：
   - 全面更新 Lenox Square 與 Chamblee 雙分店之外送平台：
     - **Lenox Square**: DoorDash (`1108545/1638594`) + Uber Eats (`JG9YA1eBW3e7_UIakWSRRg`)。
     - **Chamblee**: DoorDash (`31642151/48371165/`) + Uber Eats (`efYsOINGVsCq7TD7JLxNog`) + Grubhub (`12688616`)。
   - 修正了 Chamblee 店 DoorDash 商店編號為正確專屬 ID：`31642151/48371165/`。
4. **數據追蹤（GA4）與 GitHub Pages 線上預覽**：
   - 整合 Google Analytics 4 事件追蹤（菜色點擊、外送平台點擊、分店切換等）。
   - 暫時移除 `CNAME` 檔避免未設 GoDaddy DNS 前引發 301 轉址錯誤，確保 `https://tp1c.github.io/wok-dragon/` 可正常即時預覽。

## 🚦 目前狀態
- 前端代碼庫乾淨穩定，全站 RWD 運作順暢。
- 雙分店外送連結已完成校對並部署上線。

## ➡️ 下一步
1. 待使用者數週後在 GoDaddy 配置好 DNS 指向（4 筆 A 紀錄與 1 筆 CNAME）後，重新加入 `CNAME` 檔啟用 `wokdragon.com` 自訂網域。
2. 替換 [index.html](file:///c:/Data/Home/Antigravity/Wok%20Dragon/index.html) 中的 GA4 Measurement ID (`G-XXXXXXXXXX`) 為使用者實際 ID。

## ⚠️ 注意事項
- 菜色圖片均由 `pics/generated/` 精修產出後，放入 `assets/dishes/` 並由 Git 進行版本控制。
- Chamblee DoorDash 正確商店路徑：`https://www.doordash.com/store/wokdragon-chamblee-31642151/48371165/`。

## 🕐 最後更新
- 時間：2026-10-19 18:22
- 更新者：Antigravity
- Git push：✅ 已推 (commit 0d6263f)

