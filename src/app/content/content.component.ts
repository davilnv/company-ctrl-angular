import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  componentToShow = 'welcome';

  constructor(private axiosService: AxiosService, private router: Router) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any) {
    const data = {
      username: input.login,
      password: input.password
    };

    this.axiosService.request(
      "POST",
      "/auth/signin",
      JSON.stringify(data)
    ).then(response => {
      // console.log(response.data);
      this.axiosService.setAuthToken(response.data.acessToken);
      // if (response.data.role === 'ROLE_ADMIN') {
      //   this.router.navigate(['/admin']);
      // }
      if (this.axiosService.getAuthToken() != null) {
        this.router.navigate(['/home']);
      }
    });
  }
}
