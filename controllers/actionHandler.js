const chalk = require('chalk');

const {
    addContact,
    getContactById,
    listContacts,
    removeContact
} = require('./operations');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contacts = await listContacts()
            console.table(contacts)
        break

        case 'get':
            const contactById = await getContactById(id)
            if (contactById) {
                console.log(chalk.green('Contact found'))
                console.log(contactById)
                return
            }
            console.log(chalk.yellow('Contact not found'))
        break

        case 'add':
            const contact = await addContact(name, email, phone)
            console.log(chalk.green('Add new contact'))
            console.log(contact)
        break

        case 'remove':
            const deleteContact  = await removeContact(id)
            if (deleteContact) {
                console.log(chalk.green('Contact has been deleted'))
                console.table(deleteContact)
                return
            } 
                console.log(chalk.yellow('Incorrect id. Try again, please!'))
        break

        default:
            console.warn(chalk.red('Unknown action type!'));
    }
}

module.exports = invokeAction;