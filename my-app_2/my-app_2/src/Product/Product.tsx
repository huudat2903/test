import { debug } from "console";
import { Component } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

interface Props {
    id: number;
    name: string;
    price: number;
    index: number;
    unit: string;
    deleteProduct: any;
    editProduct: any;
}

class ProDuct extends Component<Props,any> {
    constructor(props: Props) {
        super(props)
        this.state = {
        };
    }
    delete = (id : number) => {
        debugger
        this.props.deleteProduct(id);
    }

    edit = (id: number) =>{
        debugger
        this.props.editProduct(id);
    }

    render() {
        return(
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.unit}</td>
                <td>
                    <button type="button" className="btn- btn-primary" onClick={()=> this.edit(this.props.id)}><i className="bi bi-pencil-square"></i></button>
                    <button type="button" className="btn- btn-danger" onClick={()=> this.delete(this.props.id)}><i className="bi bi-pencil-trash"></i></button>

                </td>
            </tr>
        )
    }
}

export default ProDuct;