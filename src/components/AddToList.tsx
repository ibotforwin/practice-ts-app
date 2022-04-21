import React, {useState} from 'react';


const AddToList = () => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        image: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const handleClick = (e) => {

        console.log(input)
    }


    return (
        <div>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="age"
                name="age"
                value={input.age}
                onChange={handleChange}


            />
            <input
                type="text"
                placeholder="image"
                name="image"
                value={input.image}
                onChange={handleChange}


            />
            <textarea
                placeholder="note"
                name="note"
                value={input.note}

            />

            <button
                onClick={handleClick}>
                Add To List
            </button>
        </div>
    )
}

export default AddToList