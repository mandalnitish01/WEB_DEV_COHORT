export const isLoggedIn = (req, res, next) => {
    

try {
        console.log(req.cookies)    
        let token = req.cookies?.token;

        console.log("Token found" , token? "YES" : "NO")
} catch (error) {
    
}


    next();
}