interface Product {
  id: number;
  name: string;
  price: number;
}
type PartialProduct = Partial<Product>;
type ReadonlyProduct = Readonly<Product>;