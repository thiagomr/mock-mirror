import mainController from '~/server/controllers/main-controller';
import mockController from '~/server/controllers/mock-controller';

class Router {
    constructor(app) {
        app.get('/ping', mainController.ping);

        app.del('/clear', mockController.clear);

        app.get(/\/(.*)?.*/, mockController.mirror);

        app.post(/\/(.*)?.*/, mockController.mirror);

        app.put(/\/(.*)?.*/, mockController.mirror);

        app.del(/\/(.*)?.*/, mockController.mirror);

    }
}

export default Router;
