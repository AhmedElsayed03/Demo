import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink ,Router} from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'Ahmed' && this.password === 'Ahmed') {
      this.router.navigate(['/userRequest']); 
    } 
    else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة'); 
    }
  }
}
