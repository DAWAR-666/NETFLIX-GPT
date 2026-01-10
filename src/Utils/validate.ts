const validate =(email:string,pswd:string):string=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pswdRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   
    if (emailRegex.test(email)&&pswdRegex.test(pswd)){
        return "";
    } else if (!emailRegex.test(email)){
        return "Invalid email format.";
    } else if (!pswdRegex.test(pswd)){
        return "Password must be at least 8 characters long and contain at least one letter and one number.";
    }
    return "Invalid input.";
};
export default validate;