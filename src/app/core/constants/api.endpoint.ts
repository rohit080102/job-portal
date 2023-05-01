import { environment } from "src/environments/environment";

class ApiEndpoint{
  private PATH: string = `${environment.apiEndPoint}/${environment.routeName}`;
}

export let apiEndpoints = new ApiEndpoint();
