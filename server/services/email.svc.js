var sg = require("sendgrid")(process.env.SENDGRID_SECRET_KEY);

function makeRequest(to, subject, content) {
    return sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: to,
                        },
                    ],
                    subject: 'Thank You',
                },
            ],
            from: {
                email: 'akh.hall@gmail.com',
            },
            content: [
                {
                    type: 'text/plain',
                    value: content,
                },
            ],
        },
    });
};

exports.sendEmail = function (to, subject, content) {
    var request = makeRequest(to, subject, content);
    //With promise
    sg.API(request)
        .then(response => {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        })
        .catch(error => {
            //error is an instance of SendGridError
            //The full response is attached to error.response
            console.log(error.response.statusCode);
        });
}