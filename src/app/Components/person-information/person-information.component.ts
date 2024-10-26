import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.component.html',
  styleUrls: ['./person-information.component.css']
})
export class PersonInformationComponent {


  BtnBack:any;
  BtnNext:any
  SubmitBtn:any
  SliderOne:any
  SliderTwo:any
  Sliderthree:any
  SilderNumber:number = 1
  SliderOneNav:boolean = true
  SliderTwoNav:boolean = false
  SliderThreeNav:boolean = false
  

  ngOnInit(): void {
    this.BtnBack= $(".BtnBack")
    this.BtnNext= $(".BtnNext")
    this.SubmitBtn = $(".SubmitBtn")
    this.SliderOne = $(".SliderOne")
    this.SliderTwo = $(".SliderTwo")
    this.Sliderthree = $(".SliderThree")
    
    
   
  }

  


 

  NextSilder():void{

    if(this.SilderNumber == 1){

      this.SliderOne.fadeOut(400,()=>{
        this.SliderTwo.fadeIn(400,()=>{
        this.BtnBack.fadeIn(400)

        })
        
      })

      this.SilderNumber = 2
      this.SliderOneNav = true
      this.SliderTwoNav = true
      this.SliderThreeNav = false

    } else if(this.SilderNumber == 2){

      this.SliderTwo.fadeOut(400,()=>{
        this.Sliderthree.fadeIn(400,()=>{
        })

       
        this.BtnNext.fadeOut(200,()=>{
          this.SubmitBtn.fadeIn(200)
        })
        
        

        
      })

      this.SilderNumber = 3
      this.SliderOneNav = true
      this.SliderTwoNav = true
      this.SliderThreeNav = true

    } 

    window.scrollTo(0,0);

  }


  BackSlider():void{

    if(this.SilderNumber == 2){

      this.SliderTwo.fadeOut(400,()=>{
        this.SliderOne.fadeIn(400,()=>{
        

        })
        
      })

      this.BtnBack.fadeOut(400)

      this.SilderNumber = 1
      this.SliderOneNav = true
      this.SliderTwoNav = false
      this.SliderThreeNav = false



    }else if (this.SilderNumber == 3){

      this.Sliderthree.fadeOut(400,()=>{
        this.SliderTwo.fadeIn(400,()=>{

        })

        
        this.SubmitBtn.fadeOut(200,()=>{
          this.BtnNext.fadeIn(200)
        })
        
        
      })

      this.SilderNumber = 2
      this.SliderOneNav = true
      this.SliderTwoNav = true
      this.SliderThreeNav = false


    }

    window.scrollTo(0,0);

  }

}
