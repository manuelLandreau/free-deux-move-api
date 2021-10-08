const request = require('request')
const md5 = require('blueimp-md5/js/md5.min')

const ts = Date.now();

const marvelApiUrl = (uri, page) => `https://gateway.marvel.com/v1/public/characters${uri}?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${md5(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY)}&offset=${page}`;

module.exports = {
    getAll(page = 1) {
        return new Promise((resolve, reject) => {
            request.get(marvelApiUrl('', (Math.abs(page) - 1) * 20), { json: true }, (error, response, {  data  }) => {
                if (error) reject(error)
                resolve({
                    characters: data.results,
                    offset: data.offset,
                    total: data.total,
                    page
                });
            });
        })
    }
}