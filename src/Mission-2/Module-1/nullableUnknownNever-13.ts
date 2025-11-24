// nullable, unknown & never type

// nullable
const getUser = (input: string | null) => {
    if (input) {
        console.log(`from database : ${input}`)
    }
    else {
        console.log("From database all user")
    }
}

// getUser("Nishan")

// unknown type

const discountCalculator = (input: unknown) => {
    if (typeof input === "number") {
        const discount = input * 0.5;
        const totalPrice = input - discount;
        // console.log(discount)
        // console.log(totalPrice)
    }
    else if (typeof input === "string") {
        const [discounts] = input.split(" ");
        console.log(Number(discounts) * 0.5)
    }
}

discountCalculator(100)
discountCalculator("100 tk")
discountCalculator(null)

// void
const throwError = (msg: string): never => {
    throw new Error("msg");
}
throwError('Error...')