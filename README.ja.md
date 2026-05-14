# PDF

JavaScriptを使用してPDFファイルを生成するためのシンプルなライブラリです。

## 機能
- JavaScriptでPDFドキュメントを作成
- テキスト、線、その他の基本的なグラフィックスの追加をサポート
- PDF生成にPDF-LIBライブラリを使用
- M+フォントのサポートを含む

## 要件
- [PDF-LIB](https://pdf-lib.js.org/) ライブラリ
- 日本語テキスト対応のための [M+ FONTS](https://mplusfonts.github.io/)

## 使い方
本ライブラリを使用するには、`PDF`および`A4`クラスをインポートし、新しいPDFドキュメントを作成します：

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
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
