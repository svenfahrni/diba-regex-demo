var app = new Vue({
  el: '#app',
  data: {
    showInputField: true,
    email: '',
    error: '',
    
    firstName: '',
    lastName: ''
  },
  methods: {
    getCredentials() {
      if(!this.validateInput()) return;

      const email = this.email;
      const data = email.match(/^(\w{1,16})\.(\w{1,16})/);
      
      if(!data) return this.error = 'Bitte geben sie eine HSLU E-Mail Adresse ein!';

      this.firstName = data[1];
      this.lastName = data[2];
      
      this.showInputField = false;
      this.error = '';
    },
    back() {
      this.showInputField = true;
      this.email = '';
    },
    validateInput() {
      if(!validator.isEmail(this.email)) {
        this.error = 'Bitte geben sie eine echte E-Mail Adresse ein!';
        return false;
      }

      return true;
    }
  }
});