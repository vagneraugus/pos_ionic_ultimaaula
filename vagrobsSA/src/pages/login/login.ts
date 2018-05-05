import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}



















// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {

//     constructor(public navCtrl: NavController, public authData: AuthProvider,
//     public formBuilder: FormBuilder) {
//        usamos o formbuilder para validar os campos aqui pode criar validadores customizados
//       como foi feito no email
      
//     this.loginForm = formBuilder.group({
//       email: ['', Validators.compose([Validators.required,
//       EmailValidator.isValid])],
//       password: ['', Validators.compose([Validators.minLength(6),
//       Validators.required])]
//     });
//   }

//  voltarPagina() {
//     this.navCtrl.pop();
//   }

//   loginUser() {
//     // verifica se o form foi preenchido corretamente
//     if (!this.loginForm.valid) {
//       console.log(this.loginForm.value);
//     } else {
//       // faz login usando o provider auth
//       this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
//         .then(authData => {

//           this.navCtrl.setRoot(HomePage);

//         }, error => {
//             alert('Login / senha incorretos');
//         });

//     }
//   }

//   cadastrarUsuario(){

//       this.navCtrl.setRoot(CadastrarUsuarioPage);

//   }

// }
