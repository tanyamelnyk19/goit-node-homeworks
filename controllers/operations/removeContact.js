const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, '../db', 'contacts.json')

const readContent = async () => {
    const content = await fs.readFile(contactsPath, 'utf8')
    const result = JSON.parse(content)
    return result
}

const removeContact = async (contactId) => {
    const contacts = await readContent()
    const id = contacts.findIndex(({ id }) => id.toString() === contactId)
    if (id === -1) {
        return
    }
    const deletedContact = contacts.splice(id, 1)
    await fs.writeFile(
        contactsPath, 
        JSON.stringify(contacts, null, 2),
    )
    return deletedContact
}

module.exports = removeContact;