function getData(info) {
    const { title, first, last } = info.name;
    const {phone, email} = info;
    const {large:image} = info.picture; 
    const {password} = info.login;
    const { dob: {age} } = info;
    const { street: {name, number} } = info.location;
    return {
        name: `${title} ${first} ${last}`, phone, email, image, password, age, street: `${number} ${name}`
    }
}

export default getData;