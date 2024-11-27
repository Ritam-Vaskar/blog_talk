async function userLogOut(req, res) {
    try{
        res.clearCookie('token');
        res.json({
            message: "User Logged Out",
            error: false,
            success: true,
            data:[]
        })
    }catch (error) {
        console.error("Error during signout:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: true,
            success: false
        });
    }
}

module.exports = userLogOut