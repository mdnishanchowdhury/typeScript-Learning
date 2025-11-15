// Explore Utility types

type product = {
    id: number;
    name: string,
    price: string,
    stock: number;
    color?: string
};

type productSummery = Pick<product, 'id' | 'name' | 'price'>;

type productWithoutStock = Omit<product, "stock" | "color">

type productWithColor = Required<product>

const product: productWithColor = {
    id: 121,
    name: 'Nishan',
    price: "200",
    stock: 20,
    color: "red"
}

type optionProduct = Partial<product>;

type ProductReadonly = Readonly<product>

const emptyObject: Record<string, unknown> = {}

const product1 = {
    id: 121,
    name: 'Nishan',
    price: "200",
}