import { ShoppingCartPage } from "../pages/onlineShop/shopingCartPage";
import { ProductsPage } from "../pages/onlineShop/productsPage";

export class OnlineShopFunction {
    constructor() {
        this.shoppingCartPage = new ShoppingCartPage();
        this.productsPage = new ProductsPage();
    }
};