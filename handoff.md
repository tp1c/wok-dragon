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

5. **全系列核心招牌菜品升級為頂級商業美食攝影（45度俯視、石紋陶盤、暗色板岩背景）**：
   - **Mango Chicken**：置換為現代霧面灰手工陶盤、全份量外推之招牌芒果雞（`mango_chicken.png`）。
   - **Crispy Bourbon Chicken**：焦糖琥珀色、微焦酥脆波旁雞，置於現代霧面白陶盤（`bourbon_chicken.png`）。
   - **Sweet & Sour Chicken Meal**：50/50 雙菜同盤套餐合成（上半部金黃炒飯、下半部糖醋甜酸雞），置於大型石紋白陶盤，並同步更新菜單文案為 `...with vegetable fried rice`（`sweet_sour_chicken.png`）。
   - **Traditional Lo Mein**：油亮醬色麵體、青蔥點綴與霧面灰陶盤（`lo_mein.png`）。
   - **Signature Fried Rice**：粒粒分明金黃長米、甜豆與胡蘿蔔丁，置於現代霧面白陶盤（`fried_rice.png`）。
6. **品牌識別色系優化（Pantone PMS 390 / PMS 226 / PMS 1655）**：
   - 強化亮桃紅、嫩綠與鮮橙色彩層次與微動畫對比度。
7. **Contact Us 聯絡表單正式串接官方客服信箱（`wokdragonsupport@gmail.com`）**：
   - 採用 Google 原生 Apps Script Web App 端點（`https://script.google.com/macros/s/AKfycbzySdDA4vNmMXiZ1NTTR_fdB2kb96B8rx2bjh9d2HYbiY2JE-2SJdrZpashsdKuO6qN/exec`）。
   - 100% 依託 Google 雲端架構，徹底杜絕第三方平台（FormSubmit 521 / Web3Forms）當機與漏信問題。
   - 前端採用無刷新流暢送出體驗，自動將顧客訊息發送至 `wokdragonsupport@gmail.com`。
8. **雙分店營業時間正式更新與即時狀態（Live Hours Status）連動**：
   - **Lenox Square**：週一至週六 10:30am - 8:00pm，週日 11:30am - 7:00pm。
   - **Chamblee**：週一至週六 10:30am - 8:45pm，週日 11:30am - 7:45pm。
   - 分店切換器支援動態更新營業時間與即時營業燈號（依據美東時間與所選分店獨立計算）。

## 🚦 目前狀態
- 前端代碼庫乾淨穩定，全站 RWD 運作順暢。
- 5 道核心料理已全數升級為高質感 45 度商業攝影風格，盤飾與背景達到一致。
- 聯絡表單已正式接通官方客服信箱（Google 官方端點，實測發信成功）。
- 雙分店營業時間與即時狀態邏輯已更新為官方最新規格。
- 敏感個資檔案（`Doc/`）與龐大原始照片庫（`pics/`）已安全列入 `.gitignore`。

## ➡️ 下一步
1. 待使用者數週後在 GoDaddy 配置好 DNS 指向（4 筆 A 紀錄與 1 筆 CNAME）後，重新加入 `CNAME` 檔啟用 `wokdragon.com` 自訂網域。
2. 替換 [index.html](file:///c:/Data/Home/Antigravity/Wok%20Dragon/index.html) 中的 GA4 Measurement ID (`G-XXXXXXXXXX`) 為使用者實際 ID。

## ⚠️ 注意事項
- 菜色圖片均由 `pics/` 來源圖進行 AI 精準外擴與盛盤置換後，放入 `assets/dishes/` 並由 Git 進行版本控制。
- Chamblee DoorDash 正確商店路徑：`https://www.doordash.com/store/wokdragon-chamblee-31642151/48371165/`。

## 🕐 最後更新
- 時間：2026-10-29 17:39
- 更新者：Antigravity
- Git push：即將推送最新版本
- 更新者：Antigravity
- Git push：✅ 已推 (commit 8ed4e4b)
- 更新者：Antigravity
- Git push：✅ 已推 (commit e85b466)

