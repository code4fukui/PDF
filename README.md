# PDF

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple library for generating PDF files using JavaScript.

## Features
- Create PDF documents in JavaScript
- Supports adding text, lines, and other basic graphics
- Uses the PDF-LIB library for PDF generation
- Includes support for the M+ font

## Requirements
- [PDF-LIB](https://pdf-lib.js.org/) library
- [M+ FONTS](https://mplusfonts.github.io/) for Japanese text support

## Usage
To use the library, import the `PDF` and `A4` classes and create a new PDF document:

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

## License
This project is licensed under the [MIT License](LICENSE).