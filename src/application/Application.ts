import {ApiConfig} from '../infraestructure/ApiConfig';

export class Application {
    server: any; express: ApiConfig;
    constructor() {
        this.express = new ApiConfig();
        const port = 3000;
        this.server = this.express.app.listen(port, () => {
                console.log(`Server Started! Express:
http://localhost:${port}`);
            });
}
}
