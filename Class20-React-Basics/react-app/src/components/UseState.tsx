import { useState } from "react";

type Cart = {
    id: number;
    name: string;
    price: number;
    additionalDiscount: number;
};

function UseStateCom() {
    // initial state
    const [students, setStudents] = useState<string[]>([
        "Ram",
        "Thiru",
    ]);

    // object type
    const [cart, setCart] = useState<Cart>({
        id: 1,
        name: "LG",
        price: 55000,
        additionalDiscount: 50,
    });

    // add the student
    const addStudent = () => {
        setStudents([...students, "shyam"]);
    };

    // update the price for the state object
    const updatePrice = () => {
        setCart({
            ...cart,
            price: 60000,
            additionalDiscount: 100,
        });
    };

    return (
        <div>
            <hr />
            <button onClick={addStudent}>
                Add Student
            </button>

            {students.map((student, index) => (
                <p key={index}>{student}</p>
            ))}

            <h2>Product Details:</h2>
            <h2>{cart.name}</h2>
            <h2>{cart.price}</h2>
            <h3>{cart.additionalDiscount}</h3>

            <button onClick={updatePrice}>
                Update Price
            </button>
        </div>
    );
}

export default UseStateCom