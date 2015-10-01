/**
 * Create a contact list
 * Created by Kelsie on 10/1/2015.
 */

/* globals _ */
/* exported Contact, ContactList */

/**
 * Contact constructor that accepts a list of string arguments (listed below)
 * @param firstName String that accepts a first name
 * @param lastName String that accepts a last name
 * @param address String that accepts an address
 * @param zipcode String that accepts a zipcode
 * @param telNum String that accepts a telephone number
 * @constructor Constructor of accessible arguments
 */
var Contact = function (firstName, lastName, address, zipcode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;

  var callNum = 0;

  /**
   * Calls a contact and updates an internal counter
   * @returns Returns whether the call was successful
   */
  this.call = function () {
    callNum++;
    return true;
  };

  /**
   * Counts the number of times that a contact has been called
   * @returns Returns the number of times a contact has been called
   */
  this.numCalls = function () {
    return callNum;
  };

};

/**
 * Defines a number of functions
 * @constructor Constructor that defines a number of functions
 */
var ContactList = function () {
  var contactList = [];

  /**
   * Accepts a contact and adds it to an internal data structure
   * @param contact Contact data
   * @returns Returns added contact
   */
  this.addContact = function (contact) {
    contactList.push(contact);
    return true;
  };

  /**
   * Finds number of contacts in the list
   * @returns Returns number of contacts in the list
   */
  this.numContacts = function () {
    return contactList.length;
  };

  /**
   * Finds the contact with user input of a last name
   * @param last User input of a last name
   * @returns Returns all contacts with last name input
   */
  this.findContact = function (last) {
    var lastNameList = [];
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].lastName === last) {
        lastNameList.push(contactList[i]);
      }
    }
    return lastNameList;
  };

  /**
   * Finds contact with user input of a first and last name and deletes it
   * @param first User input of a first name
   * @param last User input of a last name
   */
  this.deleteContact = function (first, last) {
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].firstName === first && contactList[i].lastName === last) {
        contactList.splice(i, 1);
      }
    }

  };

  /**
   * Sorts the contacts by their last names
   * @returns Returns array of contacts sorted by their last name
   */
  this.listContacts = function () {
    return _.sortBy(contactList, contactList.lastName);
  };
};
