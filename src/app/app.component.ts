import { Component } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedImage: any = null;
  title = 'demouploadfile';
  imgSrc: any;
  constructor(private storage: AngularFireStorage) {
  }
  // tslint:disable-next-line:typedef
  submit(){
    if (this.selectedImage != null){
      const filePath = `avatar/${this.selectedImage.name.split(',').slice(0, -1).join(',')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize( () => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imgSrc = url;
          });
        })
      ).subscribe();
    }
  }
  // tslint:disable-next-line:typedef
  showPreview(event: any){
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.submit();
    }else {
      this.imgSrc = '';
      this.selectedImage = null;
    }
  }
}
