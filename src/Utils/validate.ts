const validate =(email:string,pswd:string):boolean=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pswdRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return emailRegex.test(email)&&pswdRegex.test(pswd);
};
export default validate;