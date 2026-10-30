# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. **完成全站視覺風格重構（Sweetgreen 現代自然白綠簡約風格）**：
   - 採用純淨米白、甘藍深綠與鮮活草木綠，搭配 Gotham Rounded 圓體字型，建立清新高轉換率視覺。
   - 導覽列、頁尾、分店切換與聯絡表單視覺全面升級。
2. **5 道核心招牌菜品升級頂級商業美食攝影（45度俯視、石紋陶盤、暗色板岩背景）**：
   - **Mango Chicken**：現代霧面灰手工陶盤、全份量外推之招牌芒果雞（`mango_chicken.png`）。
   - **Crispy Bourbon Chicken**：焦糖琥珀色微焦酥脆波旁雞，置於現代霧面白陶盤（`bourbon_chicken.png`）。
   - **Sweet & Sour Chicken Meal**：50/50 炒飯與糖醋雞套餐同盤，文案同步更新為 `...with vegetable fried rice`（`sweet_sour_chicken.png`）。
   - **Traditional Lo Mein**：油亮醬色麵體、青蔥點綴與霧面灰陶盤（`lo_mein.png`）。
   - **Signature Fried Rice**：粒粒分明金黃長米、甜豆與胡蘿蔔丁，置於現代霧面白陶盤（`fried_rice.png`）。
3. **Contact Us 聯絡表單正式串接官方客服信箱（`wokdragonsupport@gmail.com`）**：
   - 部署 Google 原生 Apps Script Web App 端點（`https://script.google.com/macros/s/AKfycbzySdDA4vNmMXiZ1NTTR_fdB2kb96B8rx2bjh9d2HYbiY2JE-2SJdrZpashsdKuO6qN/exec`）。
   - 杜絕第三方服務掛點問題，前端採非同步 `no-cors` 發送，提供「Sending Message...」與即時送達反饋。
4. **雙分店營業時間正式更新與即時營業燈號（Live Hours Status）連動**：
   - **Lenox Square**：週一至週六 10:30am - 8:00pm，週日 11:30am - 7:00pm。
   - **Chamblee**：週一至週六 10:30am - 8:45pm，週日 11:30am - 7:45pm。
   - 分店切換即時連動美東時間營業/打烊狀態。
5. **正式自訂網域（`wokdragon.com`）全面解析與 HTTPS 正式上線**：
   - GoDaddy DNS 配置：4 筆 GitHub A 記錄（`185.199.108.153`～`111.153`）、`CNAME www` 指向 `tp1c.github.io`。
   - 專案根目錄納管 `CNAME`（`wokdragon.com`），GitHub Pages SSL 憑證已正式生效。
   - 實測 `https://wokdragon.com` 回應 HTTP 200 OK，`https://www.wokdragon.com` 正確 301 轉址。

## 🚦 目前狀態
- **正式官網 100% 正式上線運作**：`https://wokdragon.com` 與 `https://www.wokdragon.com` 皆安全可達。
- 前端代碼庫乾淨穩定，全站 RWD 響應式體驗流暢。
- 5 道核心料理已全數升級為高質感 45 度商業攝影風格，盤飾與背景達到一致。
- 聯絡表單已正式接通官方客服信箱（Google 官方端點，實測發信成功）。
- 雙分店最新營業時間與即時狀態邏輯已更新。
- 敏感個資檔案（`Doc/`）與龐大原始照片庫（`pics/`）已安全列入 `.gitignore`。

## ➡️ 下一步
1. 替換 [index.html](file:///c:/Data/Home/Antigravity/Wok%20Dragon/index.html) 中的 GA4 Measurement ID (`G-XXXXXXXXXX`) 為使用者實際 ID。
2. 評估是否需要新增節慶促銷 Banner 或線上訂餐折扣活動模組。

## ⚠️ 注意事項
- 菜色圖片均由 `pics/` 來源圖進行 AI 精準外擴與盛盤置換後，放入 `assets/dishes/` 並由 Git 進行版本控制。
- Chamblee DoorDash 正確商店路徑：`https://www.doordash.com/store/wokdragon-chamblee-31642151/48371165/`。
- GoDaddy DNS 中的 Google Workspace MX 與 TXT（SPF / DMARC）記錄為官方信箱必要設定，請勿更動或刪除。

## 🕐 最後更新
- 時間：2026-10-29 22:32
- 更新者：Antigravity @ DESKTOP-V8U57EU
- Git push：✅ 已推 (commit 47df883)
