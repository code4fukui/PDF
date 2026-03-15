# PDF

PDF出力ライブラリ

## デモ
[test.pdf](test.pdf)

## 機能
- PDF文書の作成
- テキスト、線の描画
- A4サイズ対応

## 必要環境
- Deno

## 使い方
```js
import { PDF, A4 } from "./PDF.js";

const font = "M_PLUS_1p/MPLUS1p-Light.ttf";
const pdf = await PDF.create(A4, font);
const page = pdf.addPage();
page.setFontSize(10); // 10mm
page.drawText("PDF出力試験", 30, page.height / 2 - 2);
page.setFontSize(5); // 5mm
page.drawText("by PDF.js", page.width - 25, page.height - 8);
page.drawLine(10, page.height / 2, page.width - 10, page.height / 2);
await pdf.save("test.pdf");
```

## ライセンス
MIT License