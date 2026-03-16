# PDF

JavaScript を使ってPDFファイルを生成するシンプルなライブラリです。

## 機能
- JavaScript でPDF文書を作成できる
- テキスト、線などの基本的な図形の描画をサポート
- PDF-LIBライブラリを使用
- M+フォントに対応

## 必要環境
- [PDF-LIB](https://pdf-lib.js.org/)ライブラリ
- 日本語テキスト用に[M+ FONTS](https://mplusfonts.github.io/)

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