class ScreenSizeDetectClass {
  windowWidth: number;
  constructor(windowWidth: number) {
    this.windowWidth = windowWidth;
  }

  detectScreenSize(): string {
    if (this.windowWidth <= 767) {
      return "Mobile";
    } else if (this.windowWidth <= 1023) {      
      return "Tablet";
    } else if (this.windowWidth <= 1439) {      
      return "Laptop";
    } else {
      return "Desktop";
    }
  }
}

// Number Format class
class NumberFormatter {
  formatNumber(num: number): string {
  return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
export { ScreenSizeDetectClass, NumberFormatter };