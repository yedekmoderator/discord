module.exports = {
    name: 'args',
    description: 'Informação sobre os argumentos recebidos',
    args: true,

    execute(message, args) {

        args[0] === 'foo' && message.channel.send('bar');

        message.channel.send(`Argumentos: ${args}\nQuantidade: ${args.length}`);
    },
};