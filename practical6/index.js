// Keelan Matthews 21549967
const http = require('http');
const fs = require('fs');
const eventValidator = require('./eventValidator');

http.createServer((req, res) => {
    fs.readFile('events.json', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const events = JSON.parse(data);
        events.map(e => {
            if (eventValidator.checkDate(e.date)) {
                e.validDate = 'Event is in the date range, ';
            }
            else {
                e.validDate = 'Event not in the date range, ';
            }

            if (eventValidator.checkName(e.title)) {
                e.validTitle = 'This is a valid event title';
            }
            else {
                e.validTitle = 'This is not a valid title';
            }
        })
        res.write(`
            <table border="1">
                <tr>
                    <th>Event name</th>
                    <th>Event description</th>
                    <th>Event date</th>
                    <th>Event details</th>
                </tr>
                ${
                    events.map(e => `
                            <tr>
                                <td>${e.title}</td>
                                <td>${e.description}</td>
                                <td>${e.date}</td>
                                <td>${e.validDate}${e.validTitle}</td>
                            </tr>
                        `).join('')
                }
            </table>
            `);
        res.end();
    })

}).listen(8888, '127.0.0.1', () => {
    console.log('Server is listening on port 8888');
});