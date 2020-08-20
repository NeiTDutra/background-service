import Mail from '../lib/Mail.js';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handler({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'node-dio-redis<nodedioredis@nod.com>',
            to: `${ user.name } <${ user.email }>`,
            subject: 'Cadastro de usuário',
            html: `<h3>Olá.Seja bem vindo.</h3><p>${ user.name }, aproveite de tudo!` 
        });
    }
}