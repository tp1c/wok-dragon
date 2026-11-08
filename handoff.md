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

6. **正式啟用 Google Analytics 4 (GA4) 網站數據追蹤**：
   - 填入官方正式 Measurement ID：`G-MXKMFQFT9F`。
   - 正式啟用全站訪客行為追蹤（外送平台點擊、電話撥打、菜單分類切換與聯絡表單送達）。
7. **聯絡表單防機器人機制（蜜罐陷阱 Honeypot + 填表時間門檻 Time Gate）**：
   - 前端加入無障礙隱藏欄位 `website` 與 2.5 秒填表時間限制。
   - 偵測到機器人時採擬真延遲與靜默丟棄（不觸發 Apps Script 後端發信、不污染 GA4 轉換事件）。
8. **官方社群新門面正式串接官網**：
   - Instagram 更新為官方帳號：`https://www.instagram.com/wokdragon.official`。
   - Facebook 更新為官方新專頁：`https://www.facebook.com/wokdragon.official/`。
   - TikTok 更新為官方新帳號：`https://www.tiktok.com/@wokdragon.official`。
   - 頁尾社群連結優化：移除閒置之 LinkedIn 連結，完成 IG / FB / TikTok 三大官方旗艦矩陣佈局。

## 🚦 目前狀態
- **正式官網 100% 正式上線運作**：`https://wokdragon.com` 與 `https://www.wokdragon.com` 皆安全可達。
- 前端代碼庫乾淨穩定，全站 RWD 響應式體驗流暢。
- 5 道核心料理已全數升級為高質感 45 度商業攝影風格，盤飾與背景達到一致。
- 聯絡表單已正式接通官方客服信箱（Google 官方端點，實測發信成功），並具備防機器人靜默過濾防護。
- 雙分店最新營業時間與即時狀態邏輯已更新。
- **GA4 正式上線運作**：已配置正式 Measurement ID `G-MXKMFQFT9F`，開始收集訪客流量與轉換數據。
- 敏感個資檔案（`Doc/`）與龐大原始照片庫（`pics/`）已安全列入 `.gitignore`。

## ➡️ 下一步
1. 在 Google Analytics 後台觀察即時（Realtime）報表驗證資料收集與事件追蹤。
2. 評估是否需要新增節慶促銷 Banner 或線上訂餐折扣活動模組。

## ⚠️ 注意事項
- 菜色圖片均由 `pics/` 來源圖進行 AI 精準外擴與盛盤置換後，放入 `assets/dishes/` 並由 Git 進行版本控制。
- Chamblee DoorDash 正確商店路徑：`https://www.doordash.com/store/wokdragon-chamblee-31642151/48371165/`。
- GoDaddy DNS 中的 Google Workspace MX 與 TXT（SPF / DMARC）記錄為官方信箱必要設定，請勿更動或刪除。

## 🕐 最後更新
- 時間：2026-11-08 15:07
- 更新者：Antigravity @ DESKTOP-V8U57EU
- Git push：✅ 已推
