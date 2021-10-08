const marvelService = require('../services/marvelService')

test('The API are Ok', () => {
    return marvelService.getAll().then(data => {
        expect(data.status).toEqual('Ok');
    });
});

test('Get the page 2 with offset 20', () => {
    return marvelService.getAll(2).then(data => {
        expect(data.data.offset).toEqual(20);
    });
});