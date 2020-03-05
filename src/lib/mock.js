import MockModel from '~/models/mock';

class Mock {
    async mirror(method, route, params) {
        try {
            const mock = await MockModel.collection.findOne({
                method,
                route
            });

            if (mock) {
                return mock.params;
            }

            await MockModel.collection.insert({
                method,
                route,
                params
            });

            return params;
        } catch (e) {
            throw e;
        }
    }

    async clear() {
        try {
            await MockModel.collection.deleteMany({});
        } catch (e) {
            throw e;
        }
    }
}

export default new Mock();
