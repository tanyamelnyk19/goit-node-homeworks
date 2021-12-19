const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, '../db', 'contacts.json')

const readContent = async () => {
    const content = await fs.readFile(contactsPath, 'utf8')
    const result = JSON.parse(content)
    return result
}

const getContactById = async (contactId) => {
    const contacts = await readContent()
    const contact = contacts.find(contact => contact.id === contactId)
    return contact
}

module.exports = getContactById;