import Rule from "./Rule";
import methods from 'validator';

class Validator {
  rules: Rule[];
  isValid: boolean | undefined;
  errors: any;
  constructor(rules :Rule[]) {
    this.rules = rules;
    this.initiate();
  }
  initiate() {
    this.isValid = true;
    this.errors = {};
  }
  validate(state: any) {
    this.initiate();
    this.rules.forEach((rule:Rule) => {
      if (this.errors[rule.field]) return;
      const fieldValue = state[rule.field] || "";
      const args = rule.args || [];
      const validationMethod = methods[rule.method];
      if(typeof validationMethod === "function"){
        if (validationMethod(fieldValue,args) !== rule.validWhen) {
          this.errors[rule.field] = rule.message;
          this.isValid = false;
        }
      }
    });
    return this.errors;
  }
}
export default Validator;