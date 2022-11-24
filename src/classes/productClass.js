class ProductClass {
    pId;
    pName;
    cal;
    price;
    amount;
    constructor(pid, pname, cal, price){
        this.pId = pid;
        this.pName = pname;
        this.cal = cal;
        this.price = price;
        this.amount = 1;
    }
    total(){
        return parseFloat((this.price * this.amount).toFixed(2));
    }
    calTotal(){
        return parseFloat((this.cal * this.amount).toFixed(2));
    }
    toObject(){
        return {
            pid: this.pId,
            name: this.pName,
            cal: this.cal,
            price: this.price
        }
    }
}
export default ProductClass;