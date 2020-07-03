import React, { useState } from 'react';
const App = () =>{
const [fullName, setFullName] = useState({
    fname : "",
    lname : "",
    email: "",
    phone: "",
    qua: "",
});



const inputEvent = (event) => {
console.log(event.target.value);
console.log(event.target.name);

// const value = event.target.value;
// const name = event.target.name;

//OBJECT DESTRUCTION
const {name, value} = event.target

setFullName((preValue) =>{
    console.log(preValue);
    return{
        ...preValue,
        [name] : value,
    }
    // if(name == 'fName'){
    //     return{
    //         fname : value,
    //         lname : preValue.lname,
    //         email: preValue.email,
    //         phone:preValue.phone,
    //     };
        
    // }else if(name == 'lName'){
    //     return{
    //         fname : preValue.fname,
    //         lname : value,
    //         email: preValue.email,
    //         phone:preValue.phone,
    //     };
        
    // }
    // else if(name == 'email'){
    //     return{
    //         fname : preValue.fname,
    //         email: value,
    //         lname : preValue.lname,
    //         phone:preValue.phone,
    //     };
        
    // }
    // else if(name == 'phone'){
    //     return{
    //         fname : preValue.fname,
    //         lname : preValue.lname,
    //         email: preValue.email,
    //         phone:value,
    //     };
        
    // }
});
};
const onSubmits = (event) =>{
event.preventDefault();
alert('Signed Up successfully');
};



return(
<>
    <div className="main_div">
        <form onSubmit={onSubmits}>
            <div>
                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <p>{fullName.qua}</p>
                <input type="text" placeholder="enter your First name" name='fname' onChange={inputEvent}
                value={fullName.fname} autoComplete='off'/>
                <br />
                <input type="text" placeholder="enter your Last name" name='lname' onChange={inputEvent}
                value={fullName.lname} autoComplete='off'/>
                <input type="email" placeholder="enter your email id" name='email' onChange={inputEvent}
                value={fullName.email} autoComplete='off'/>
                <br />
                <input type="number" placeholder="enter your mobile number" name='phone' onChange={inputEvent}
                value={fullName.phone} autoComplete='off'/>
                <br />
                <input type="text" placeholder="enter your Qualification" name='qua' onChange={inputEvent}
                value={fullName.qua} autoComplete='off'/>
                <br />
                <button type="submit" onClick={onSubmits}>Submit 👍</button>
            </div>
        </form>
    </div>
</>
);
};

export default App;