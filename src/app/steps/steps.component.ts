import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StepImagesModel} from "../models/step-images.model";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit{
  step1Images: StepImagesModel[] = [
    {
      id: 1,
      isActive: true,
      urlImg: '../../assets/images/step1_img1.jpg',
    },
    {
      id: 2,
      isActive: false,
      urlImg: '../../assets/images/1slide.jpg',
    },
    {
      id: 3,
      isActive: false,
      urlImg: '../../assets/images/2slide.jpg',
    },
    {
      id: 4,
      isActive: false,
      urlImg: '../../assets/images/3slide.jpg',
    }
  ]
  elements: any;
  rectsIndexArray: number[] = [];
  slideIndex = 1;

  @ViewChild('stepImage') stepImage!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.elements = document.getElementsByClassName('rect');
    this.elements[0].style.opacity = '1';
    this.elements[0].style.width = '40px';
    for(let i = 1; i <= this.elements.length; i++){
      this.rectsIndexArray.push(i);
    }
    this.selectImg(this.slideIndex);
  }

  changeSlideLeft(){
    this.slideIndex !== 1 ? this.slideIndex-- : this.slideIndex = this.elements.length;
    this.selectImg(this.slideIndex);
  }
  changeSlideRight(){
    this.slideIndex !== this.elements.length ? this.slideIndex++ : this.slideIndex = 1;
    this.selectImg(this.slideIndex);
  }

  selectImg(index: number){
    Object.values(this.elements).forEach((el: any) => {
      if(el.getAttribute('id') === `rect${index}`){
        el.style.width = '40px';
        el.style.transition = 'width .3s'
        el.style.opacity = '1';
      } else {
        el.style.width = '20px';
        el.style.transition = 'width .3s'
        el.style.opacity = '.5';
      }
    })
    this.stepImage!.nativeElement.style.opacity = '0';
    this.stepImage!.nativeElement.style.transition = 'opacity .3s';
    setTimeout(()=>{
      this.step1Images.forEach(el => {
        el.isActive = el.id === index;
      });
      this.stepImage!.nativeElement.style.opacity = '1';
    }, 300)
  }
}
