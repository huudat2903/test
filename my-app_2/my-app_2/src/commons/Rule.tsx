import methods from 'validator';
interface Rule {
    field: string;
    method: keyof typeof methods;
    validWhen: boolean;
    message: string;
    args?: Array<any>;
}
export default  Rule;
