module.exports = {
    name: 'bye',
    description: 'Mensagem de despedida',
    execute(message, args) {
        message.channel.send('falô');
    },
};