import User from '../models/User.js';

const getuserById = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};  

const updateUser = async (req, res) => {
    try{
        const {height} = req.body;
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        user.height = height;
        await user.save();
        res.json({ message: "Height updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating height" });
    }
};

export default { getuserById, updateUser };