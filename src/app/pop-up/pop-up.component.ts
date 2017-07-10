import {Component} from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
    selector: 'pop-up',
    templateUrl: 'pop-up.component.html',
    styleUrls: ['pop-up.component.css'],

})
export class PopUpComponent {
  constructor(private popup:Popup) {}
  
 
  showPopUp(){
    this.popup.options = {
      header: "Подтверждение",
      color: "#428bca", // red, blue.... 
      widthProsentage: 80, // The with of the popou measured by browser width 
      animationDuration: 0, // in seconds, 0 = no animation 
      showButtons: false, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "OK", // The text on your confirm button 
      cancleBtnContent: "Cancel", // the text on your cancel button 
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    };
    
    this.popup.show(this.popup.options);
  }

  closePopUp(){
    this.popup.visibleChanged.emit(false);
  }
}

  

