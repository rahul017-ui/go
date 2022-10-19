import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  title = 'fileUpload';
  document = '';
  multiplefiles:any=[];
  progress:any= String;
  attachmentList:any = [];



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  selectDocument() {
    this.document
  }

  selectMultipleDocument(){
      this.multiplefiles
    }
  

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('document', this.document);
  //   this.userService.document(formData).subscribe(res => console.log("bsfvs")
  //   )
  // }

  onSubmit() {
    const formData = new FormData();
    formData.append('document', this.document);
    this.userService.document(formData).subscribe(
    //   event=>{
    //   if (event.type === HttpEventType.UploadProgress) {
    //     this.progress = Math.round(100 * event.loaded /event.total!);
    //     this.value=this.progress
    //   }else if(event.type==HttpEventType.Response){
    //     console.log(event.body)
    //   }

    // }
      
    //  res => console.log("bsfvs")
    );
  }

  onMultipleSubmit(){
    const formData = new FormData();

      formData.append('document',this.multiplefiles );
    

    this.userService.multidocument(formData).subscribe(
      // event=>{
      //   if (event.type === HttpEventType.UploadProgress) {
      //     this.progress = Math.round(100 * event.loaded /event.total!);
      //     this.value=this.progress
      //   }else if(event.type==HttpEventType.Response){
      //     console.log(event.body)
      //   }
      // })
    )
  }


  getdoc(){
    this.userService.getdocument().subscribe
  }


  download(){
   var filename = this.attachmentList.uploadname;

    this.userService.downloadFile(filename)
    .subscribe(
        // data => saveAs(data, filename),
        // error => console.error(error)
    );
}

  // color='primary';
  // mode:any='determinate';
  // value = 0;
  }






