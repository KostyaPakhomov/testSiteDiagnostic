import {Component, OnInit} from '@angular/core';
import {TypesOfWorkModel} from "../models/types-of-work.model";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  slider: any;
  posiX = 0;
  typesOfWork: TypesOfWorkModel[] = [
    {
      id: 1,
      imageLink: '../../assets/images/1slide.jpg',
      header: 'Общее обследование',
      text: 'Экспертиза отдельных конструкций, обмерные работы,\n определение прочности, расчет несущей способности\n и т.д.',
      aboutLink: '/'
    },
    {
      id: 2,
      imageLink: '../../assets/images/2slide.jpg',
      header: 'Тепловизионная съемка',
      text: 'Исследование системы отопления, вентиляции\n и кондиционирования, а также оценка\n энергоэффективности здания',
      aboutLink: '/'
    },
    {
      id: 3,
      imageLink: '../../assets/images/3slide.jpg',
      header: 'Телеинспекция инженерных сетей',
      text: 'Цветная телевизионная съемка внутренней\n поверхности любых протяженных объектов\n до 250 метров',
      aboutLink: '/'
    },
    {
      id: 4,
      imageLink: '../../assets/images/4slide.jpg',
      header: 'Тахеометрическая съемка',
      text: 'Построение чертежей при помощи лазера,\n который с точностью до микрона определяет\n расположение объектов в пространстве',
      aboutLink: '/'
    },
    {
      id: 5,
      imageLink: '../../assets/images/1slide.jpg',
      header: 'Общее обследование',
      text: 'Экспертиза отдельных конструкций, обмерные работы,\n определение прочности, расчет несущей способности\n и т.д.',
      aboutLink: '/'
    },
    {
      id: 6,
      imageLink: '../../assets/images/2slide.jpg',
      header: 'Тепловизионная съемка',
      text: 'Исследование системы отопления, вентиляции\n и кондиционирования, а также оценка\n энергоэффективности здания',
      aboutLink: '/'
    },
    {
      id: 7,
      imageLink: '../../assets/images/3slide.jpg',
      header: 'Телеинспекция инженерных сетей',
      text: 'Цветная телевизионная съемка внутренней\n поверхности любых протяженных объектов\n до 250 метров',
      aboutLink: '/'
    },
    {
      id: 8,
      imageLink: '../../assets/images/4slide.jpg',
      header: 'Тахеометрическая съемка',
      text: 'Построение чертежей при помощи лазера,\n который с точностью до микрона определяет\n расположение объектов в пространстве',
      aboutLink: '/'
    },
  ];

  constructor() { }
  ngOnInit(): void {
    this.slider = document.getElementById('slider');
    this.slider.onwheel = (ev: WheelEvent) => {this.onwheelAction(ev)};
  }
  stopEv(e: WheelEvent){
    e.preventDefault();
    e.stopPropagation();
  }
  onwheelAction(ev: WheelEvent){
    const sliderScroll = -this.slider.offsetLeft+window.innerWidth < this.slider.clientWidth ? -this.slider.offsetLeft+window.innerWidth : this.slider.clientWidth;
    const width = this.slider.clientWidth;
    const scrolled = (sliderScroll / width) * 100;
    let pos = this.slider.offsetLeft;
    pos += -(ev.deltaY/10);
    this.slider.addEventListener('wheel', this.stopEv);

    if(this.slider.offsetLeft === 0 && ev.deltaY===-100 || this.slider.clientWidth === sliderScroll && ev.deltaY===100){
      this.slider.removeEventListener('wheel', this.stopEv);
      pos = this.slider.offsetLeft;
    } else {
    }
    this.slider.style.left = `${pos}px`;
    document.getElementById("myBar")!.style.width = scrolled + "%";
  }
}
