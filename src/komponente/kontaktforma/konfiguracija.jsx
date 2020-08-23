export const konfiguracijaKontaktForme = {
    api: `${process.env.REACT_APP_API}`,
    title: 'Contact Me',
    successMessage: 'Poruka je poslata. Hvala na ukazanom poverenju!',
    errorMessage: 'Nažalost došlo je do greške.',
    fields:{
      firstName: '',
      lastName: '',
      email: '',
      msg: '',
    },
    fieldsConfig:  [
     { id: 1, label: 'Ime', fieldName: 'firstName', type: 'text',placeholder:'Unesite Vaše ime..', isRequired: true , klassName:'first-name-field'},
     { id: 2, label: 'Prezime', fieldName: 'lastName', type: 'text', placeholder: 'Unesite Vaše prezime..', isRequired: true , klassName:'last-name-field'},
     { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: 'Unesite Vašu email adresu..', isRequired: true , klassName:'email-field'},
     { id: 4, label: 'Poruka', fieldName: 'msg', type: 'textarea',placeholder:'Napišite poruku.....', isRequired: true , klassName:'message-field'},
    ]
  }