import mock from '~/lib/mock';
import logger from '~/lib/logger';

class MockController {
    async clear(req, res) {
        try {
            await mock.clear();

            return res.send(200, 'ok');
        } catch (e) {
            logger.error(e);
            return res.send(500, e.message);
        }
    }

    async mirror(req, res) {
        try {
            const mockMirror = await mock.mirror(req.method, req.url, req.body);

            return res.send(200, mockMirror);
        } catch (e) {
            logger.error(e);
            return res.send(500, e.message);
        }
    }
}

export default new MockController();
