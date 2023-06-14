import { Component } from "react";
import ProductState from "./ProductState";
import Product from "./Product";
import productAPI from "../API/ProductAPI";

interface Props {
    productList: Array<ProductState>;
    deleteProduct: any;
    editProduct: any;
}

interface State {
    price: number;
}

class ProductList extends Component<Props,State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            price : 20000,
        }
    }
    static defaultProps = {
        productList:[

        ]
    }

    deleteProduct = (id : number) => {
        this.props.deleteProduct(id);
    }
    editProduct = (id : number) => {
        this.props.editProduct(id);
    }

    render() {
        <fieldset className= "border p-2">
            <legend className="scheduler-border">Danh sách sản phẩm</legend>
            <table className="table table-dark table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Đơn Vị Tính</th>
                        <th scope="col"><div className="text-center">#</div></th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {
                        this.props.productList.map((product) => {
                            return <Product
                            index = {this.props.productList.indexOf(product) + 1}
                            id = {product.id}
                            key = {product.id}
                            name = {product.name}
                            price = {product.price}
                            unit = {product.unit}
                            deleteProduct = {this.deleteProduct}
                            editProduct = {this.editProduct}
                            />
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    }
}