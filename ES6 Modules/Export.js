const laptop = "DELL Laptop, HP Laptop";

function Mobile() {
    console.log("New Model Mobile For Customer");
}

function Cars() {
    console.log("New Model Car For Customer");
}

class NewCls {
    Tools() {
        console.log("New Tools");
    }
}

// By Using Same Name
export { laptop, Mobile, Cars };

// By Using Any Name
export default NewCls;