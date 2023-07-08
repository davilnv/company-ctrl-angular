import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  componentToShow = 'welcome';

  constructor(private axiosService: AxiosService) { }

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
      this.axiosService.setAuthToken(response.data.accessToken);
      this.componentToShow = 'auth';
    });
  }
}
