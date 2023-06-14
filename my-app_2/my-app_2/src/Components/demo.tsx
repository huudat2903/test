import { Component } from 'react';
import Validator from "../commons/Validator";
import Rule from "../commons/Rule";
import { debug } from 'console';

interface State {
    id: number;
    name: string;
    code: string;
    price: number;
    productTypes: Array<SelectBoxItem>;
    description?: string;
    importDate?: string;
    unit: string;
    errors: any;
    changeByInput: boolean,
}
const initialState = {
    id: 0,
    name: "",
    code: "",
    price: 0,
    productTypes: [
        { id: "productType1", value: 1, text: "Đồ gia dụng", checked: false },
        { id: "productType2", value: 2, text: "Đồ điện tử", checked: false },
        { id: "productType3", value: 3, text: "Quần áo", checked: false },
        { id: "productType4", value: 4, text: "Sách", checked: false },
        { id: "productType5", value: 5, text: "Khác", checked: false },
    ],
    unit: "",
    errors: {},
    changeByInput: false,
};

interface SelectBoxItem {
    value: number,
    text: string,
    id: string,
    checked: boolean;
}

interface Props {
    addProduct?: any;
    editProduct?: any;
    updateProduct?: any;
    product: any;
}

class NewProduct extends Component<Props, State> {
    validator: Validator;
    changeState: boolean;
    constructor(props: any) {
        super(props)
        this.state = initialState;
        const rules: Rule[] = [
            {
                field: 'name',
                method: "isEmpty",
                validWhen: false,
                message: 'The name field is required.',
            },
            {
                field: 'name',
                method: "isLength",
                args: [{ max: 50 }],
                validWhen: true,
                message: 'The name must be at lest 50 characters.',
            },
            {
                field: 'code',
                method: "isEmpty",
                validWhen: false,
                message: 'The code field is required.',
            },
            {
                field: 'code',
                method: "isLength",
                args: [{ max: 10 }],
                validWhen: true,
                message: 'The name must be at lest 10 characters.',
            },
        ];
        this.changeState = false;
        this.validator = new Validator(rules);
    } 

    reset = () => {
        let date = [27,10,2022];
        let [a, b,c] = date;
        console.log('day : ' + a);
        console.log('month : ' + b);
        console.log('year : ' + c);
    }
    
    render() {
        return (
            <div></div>
        )
    }
}
export default NewProduct;