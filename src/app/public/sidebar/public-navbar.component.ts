import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.sass']
})
export class PublicNavbarComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(register: any) {
    this.modalService.open(register, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(register)
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onClickRegister(){
    console.log("test")
  }

  onClickLogin(data: any) {
    console.log("Entered Email id : " + data.emailid);
  }

  goToPlaceTips(){
    console.log("goToPlaceTips")
  }

  goToTopList(){
    console.log("goToTopList")
  }

  goToMyResult(){
    console.log("goToMyResult")
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}
