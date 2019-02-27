"use strict";
class AddressBook {
    constructor(contacts) {
        this.contacts = contacts;
    }

    add(info) {
        this.contacts.push(info);
    }

    deleteAt(index) {
        this.contacts.splice(index, 1);

    }

    deleteByName(name) {
        this.contacts.splice(name, 1);
    }

    print() {
        console.log(this.contacts);
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let response;
let remove;
let book = new AddressBook([new Contact('Ayaka', 'ayaka.hibino@gmail.com', '248.505.9864', 'owner'), new Contact('Ivan', 'ivan@email.com', '313.111.2222', 'instructor'), new Contact('Maho', 'maho@email.com', '313.222.1111', 'sister')]);

while (response !== null) {

    response = prompt('Would you like to: "add", "delete", "print", or "quit"?');

    if (response === null) {
        break;

    } else if (response.trim().toLowerCase() === 'add') {
        let responseName = prompt('Type the name of the contact.');
        let responseEmail = prompt('Type the email of the contact.');
        let responsePhone = prompt('Type the phone number of the contact. (E.g. 313.222.4444)');
        let responseRelation = prompt('Type the contact\'s relation to you. (E.g. Sister)');

        let contactAdd = new Contact(responseName, responseEmail, responsePhone, responseRelation);
        book.add(contactAdd);


    } else if (response.trim().toLowerCase() === 'delete') {

        let deleteAsk = prompt('Do you know the index of the contact you would like to delete? Type "yes" if you do.');
        if (deleteAsk.toLowerCase().trim() === 'yes') {
            remove = prompt('What is the index of the contact you would like to delete?');
            book.deleteAt(remove);
        } else {
            let deleteName = prompt('Type the name of the contact that you would like to delete.');
            book.deleteByName(deleteName);
        }

        //this is a way to have user type name, convert into index then delete
        // remove = prompt('Please type the name of the contact you would like to delete.');

        // let indexResponse = book.contacts.map(function (obj) { return obj.name; }).indexOf(remove);
        // book.deleteAt(indexResponse);

    } else if (response.trim().toLowerCase() === 'print') {
        book.print();

    } else if (response === 'quit') {
        break;
    }
}




