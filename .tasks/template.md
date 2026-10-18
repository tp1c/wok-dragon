---
id: TASK-000
status: DRAFT # DRAFT | ASSIGNED | IN_PROGRESS | REVIEW_READY | REVIEW_PASSED | DONE
priority: MEDIUM # LOW | MEDIUM | HIGH | CRITICAL
assignee: Core-Developer
reviewer: QA-Reviewer
source_issue: ""
created_at: 2026-09-18T00:00:00
updated_at: 2026-09-18T00:00:00
---

# 📋 任務名稱：[請填寫簡明具體的任務名稱]

## 1. 上下文指針 (Context Pointers)
<!-- 禁止貼大段代碼，一律以檔案路徑與行號指針標注 -->
- 參考依賴：[檔名](file:///path/to/reference_file#L1-L30)
- 目標更動：[檔名](file:///path/to/target_file#L1-L50)

## 2. 實作範圍與邊界 (Scope & Boundaries)
- **允許更動**：
  - <請條列允許更動的檔案與函式>
- **禁區 (Out-of-Bounds)**：
  - <嚴格禁止改動的模組、檔案或介面>

## 3. 驗收清單 (Definition of Done)
- [ ] 條件 1：<具體功能與邊界行為描述>
- [ ] 條件 2：單元測試通過且無錯誤（測試命令：`<具體測試指令>`）
- [ ] 條件 3：代碼風格與型別檢查全數通過

---

## 4. 交付結果 (Developer 回填)
<!-- 核心研發員實作完成後回填本節，並將 status 改為 REVIEW_READY -->
- **實作狀態**：待實作
- **變更摘要**：
  - `<修改檔案 1>`: <說明>
- **測試命令與執行結果**：
  ```bash
  # 貼上測試執行輸出截圖或文字
  ```
- **自我檢核**：
  - [ ] 無多餘除錯代碼
  - [ ] 測試 100% 通過

---

## 5. 審查決議 (Reviewer 回填)
<!-- 品管審查員審查後回填本節，結論為 PASS 則改為 REVIEW_PASSED，退回則改為 IN_PROGRESS -->
- **審查結論**：[ ] PASS (通過)  [ ] REVISE (退回修改)
- **檢核清單**：
  - [ ] 完全符合驗收清單 (DoD)
  - [ ] 單元測試涵蓋異常邊界
  - [ ] 無安全性隱患與憑證洩漏
  - [ ] 未改動任何禁區檔案

### 審查意見與建議
> <若為 REVISE，請附上具體問題行號與修復程式碼 Snippet；若 PASS 請註記通過說明>
