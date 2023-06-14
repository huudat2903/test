import React,{Component, useState} from "react";
import productAPI from "../API/ProductAPI";
import ProductList from "../Product/ProductList";
import ProductState from "../Product/ProductState";

interface State {
    productList :  Array<ProductState>;
    product?: ProductState;
}

class Container extends Component<any,State> {
    constructor(props:any){
        super(props)
        this.state={
            productList : [],
            product: {
                id : 2,
                index: 1,
                name: "",
                code: "",
                price: 0,
                unit: "",
                type: [],   
            }
        }
    }

    fetchProduct = async () => {
        const response = await productAPI.getAll();
        this.setState({
            productList : [...response.data],
        });
    }

    componentDidMount() {
        this.fetchProduct();
    }

    deleteProduct = async (id: number) => {
        await productAPI.delete(id).then(
            async () => this.fetchProduct()
        );
    }
    addProduct = async (product: any) => {
        await productAPI.create(product).then(
            async() => this.fetchProduct()
        );
    }
    updateProduct = async (product: any) => {
        await productAPI.update(product).then(
        async () => this.fetchProduct()
    );
}

    editProduct = async (id: number) => {
        debugger
        var dataTest = await productAPI.getById(id);
        var _product = dataTest.data;
        this.setState({
            product : _product
        });
    }
}
