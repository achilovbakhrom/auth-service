import {controller, httpGet, interfaces} from "inversify-express-utils";
import {ApiOperationGet, ApiPath} from "swagger-express-ts";

@ApiPath({
    path: "/user",
    name: "Users resources",
})
@controller("/user")
export class UserController implements interfaces.Controller {

    @ApiOperationGet({
        description: "Retrieves list of users",
        parameters: {},
        responses: {}
    })
    @httpGet("/")
    async getUsers(): Promise<void> {}
}
