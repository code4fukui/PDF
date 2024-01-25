import { PDFDocument } from "https://cdn.pika.dev/pdf-lib@^1.7.0";
import fontkit from 'https://cdn.skypack.dev/@pdf-lib/fontkit@^1.0.0?dts';

const defaultfont = "M_PLUS_1p/MPLUS1p-Light.ttf";

export const A4 = { width: 210, height: 297 }; // mm

const mm2pt = mm => mm / 25.4 * 72;

class PDFGraphics {
  constructor(pdf, font, page) {
    this.pdf = pdf;
    this.font = font;
    this.page = page;
  }
  get width() {
    return this.pdf.width;
  }
  get height() {
    return this.pdf.height;
  }
  setFontSize(size) {
    this.fontsize = size;
  }
  _y(y) {
    return mm2pt(this.height - y);
  }
  drawText(s, x, y) {
    this.page.drawText(s, { font: this.font, x: mm2pt(x), y: this._y(y), size: mm2pt(this.fontsize) });
  }
  setLineWidth(n) {
    this.page.setLineWidth(n);
  }
  drawLine(x1, y1, x2, y2) {
    this.page.drawLine({
      start: { x: mm2pt(x1), y: this._y(y1) },
      end: { x: mm2pt(x2), y: this._y(y2) },
    });
  }
}

export class PDF {
  static async create(sizeinmm = A4, fontPath = defaultfont) {
    const pdfDoc = await PDFDocument.create();
    const fontBytes = await Deno.readFile(fontPath);
    pdfDoc.registerFontkit(fontkit);
    const font = await pdfDoc.embedFont(fontBytes);
    return new PDF(pdfDoc, sizeinmm, font);
  }
  constructor(pdfDoc, sizeinmm, font) {
    this.pdfDoc = pdfDoc;
    this.sizeinmm = sizeinmm;
    this.font = font;
  }
  get width() {
    return this.sizeinmm.width;
  }
  get height() {
    return this.sizeinmm.height;
  }
  addPage() {
    const page = this.pdfDoc.addPage([mm2pt(A4.width), mm2pt(A4.height)]);
    return new PDFGraphics(this, this.font, page);
  }
  async toPDF() {
    return await this.pdfDoc.save();
  }
  async save(fn) {
    await Deno.writeFile(fn, await this.toPDF());
  }
};
