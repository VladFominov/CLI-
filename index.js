const { nanoid } = require("nanoid");
let ID = nanoid();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const getContact = await getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const appendContact = await addContact(id = ID, name, email, phone);
      console.log(appendContact);
      break;

    case "remove":
      const remContact = await removeContact(id);
      console.log(remContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
