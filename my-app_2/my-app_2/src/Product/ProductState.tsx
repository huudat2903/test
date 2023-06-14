interface ProductState {
    id: number;
    name: string;
    code: string;
    price: number;
    index: number;
    unit: string;
    importDate?: Date;
    description?: string;
    type: Array<number>;
}

export default ProductState;