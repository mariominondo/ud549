describe('AddressBook',fuction(){
	it('should be able to add a contact', function(){
		var addressBook = new AddressBook();
				thisContact = new Contact();

		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});
});