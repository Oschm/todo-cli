const tasks = require('./tasks');

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        tasks.addTask(args.join(' '));
        break;
    case 'view':
        tasks.viewTasks();
        break;
    case 'remove':
        tasks.removeTask(parseInt(args[0]));
        break;
    case 'complete':
        tasks.markTaskComplete(parseInt(args[0]));
        break;
    default:
        console.log('Command not recognized');
}
