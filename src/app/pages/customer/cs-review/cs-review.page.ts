import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { FirebaseProductService } from 'src/app/services/firebase-product.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductReview } from 'src/app/models/product';

@Component({
  selector: 'app-cs-review',
  templateUrl: './cs-review.page.html',
  styleUrls: ['./cs-review.page.scss'],
})
export class CsReviewPage implements OnInit {

  image: string | ArrayBuffer;
  imageFile: File;
  addProductForm: FormGroup;
  rating: string[];
  submitted: boolean;
  custEmail: string[];
  user: User = new User();

  constructor(
    private productService: FirebaseProductService,
    private auth: AuthService
  ) {
    this.user = this.auth.getCurrentUser();
    console.log(this.user.email);
    this.rating = ['1 star', '2 stars', '3 stars'];
    this.addProductForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      rating: new FormControl('1 star'),
      image: new FormControl(),
      custEmail: new FormControl(this.user.email)
    });
  }

  ngOnInit() {
  }

  add() {
    this.submitted = true;

    if (this.addProductForm.valid) {

      let imageName = '';

      if (this.imageFile) {
        imageName = this.imageFile.name;
      }

      const prod = new ProductReview(this.addProductForm.value.comment,
        imageName,
        this.addProductForm.value.rating,
        this.addProductForm.value.custEmail,
      );
      prod.imageFile = this.imageFile;
      this.productService.add(prod);
    }
  }

  changeFile(event) {
    // Save the file to add in DB later when user click on 'Add' button
    this.imageFile = event.target.files[0];
    // Show the image on the page
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.imageFile);
    fileReader.onloadend = (e) => {
      this.image = fileReader.result;
    };
  }

}


