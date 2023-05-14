import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.component.html',
  styleUrls: ['./masonry-grid.component.css']
})
export class MasonryGridComponent {
  @Input() inputData: any[] | undefined;
  @Output() outputData = new EventEmitter<any[]>();

  images = [
    { url: 'https://drive.google.com/file/d/1w_e_hiAgYEf4uraZ9IKts6QUhg9mc3p5/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/1fultATpGPeRyxAh52PoO2_zuFoNtp38X/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/12G20kjkrfsrOg5C7vfRei16KlbfzPd0x/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/13JSVu-9s5V1LIuIB_AyY3XFB52QfsXgf/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/1DpkVm-JBmcSXXcQiHQJfWQr4znFOfM43/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/1UwqZnwYvXYaLHJASR1WCTsIRa_60xgOO/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/1lYMfp3Qtfb3wO9Gj1diS1A-MfgTkcMSq/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/1NCRqr0oM8_wn59WQtmZN0djgFP5ZCj4O/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/13Zr_yuJODDlgXe6OXEJ_TjmoOo1uNgdj/view?usp=share_link' },
    { url: 'https://drive.google.com/file/d/1l6UlEIaj7UsXDytTqP3ry_iZc9j4ikjx/view?usp=share_link' },
  ];

  ngOnInit() {
    if (this.inputData) {
      this.images = this.inputData;
      this.outputData.emit(this.inputData);
    }
  }
}
