describe('Api Authentication', () => {
    it('Basic Auth', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user: 'postman',
                pass: 'password'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    });

    it('Digest Auth', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    });

    const token = `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`
    it('Bearer Token', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('API Key', () => {
        cy.request({
            method: 'GET',
            url: 'https://home.openweathermap.org/api_keys',
            qs: {
                q: 'Kathmandu',
                appid: '33a455203c819bbab78c0d2a4b5f6948'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
    })
})

describe.only('OAuth 2.0 github', () => {
    let accessToken = ""
    it('generating access token', () => {
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: 'Ov23liN5mI0CTaYhO2A5',
                client_secret: '762fef015e2fb5f69df34b77b74a7816dc38d8ca',
                code: '07aacb244b502dc80694'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const params = response.body.split('&')
            accessToken = params[0].split('=')[1]
            cy.log('Generated token is:' + accessToken)
        })
    })
    it('using accesstoken and validation', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/users/repos',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

});

