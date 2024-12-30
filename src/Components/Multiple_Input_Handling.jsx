import React, { useState } from 'react'

function Multiple_Input_Handling() {

    const [formData, setFormData] = useState({

        name: " ",
        email: " ",
        password: " ",
        age: " ",
        phone: " "

    });

    

    const onChangeHandler = (e) => {
        const {name, value} = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);


        setFormData({
            name: " ",
            email: " ",
            password: " ",
            age: " ",
            phone: " "
        });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                    <div>
                        Name:- <input value={formData.name} name='name' onChange={onChangeHandler} type="name" />

                    </div>

                    <div>
                        Email:- <input value={formData.email} name='email' onChange={onChangeHandler} type="text" />
                    </div>

                    <div>
                        Password:- <input value={formData.password} name='password' onChange={onChangeHandler} type="password" />
                    </div>
                    <div>
                        Age:- <input value={formData.age} name='age' onChange={onChangeHandler} type="Age" />
                    </div>
                    <div>
                        phone:- <input value={formData.phone} name='phone' onChange={onChangeHandler} type="phone" />
                    </div>
                    <div>
                        <button>Sumbit</button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Multiple_Input_Handling