// import the model
const Todo = require("../models/Todo");

// define router handler
exports.getTodo = async(req, res) => {
    try{
        // fetch all todo items from the database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data: todos,
            message: "Entire Todo data is fetched",
        });
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Server Error",
        });
    }
}

exports.getTodoById = async (req, res) => {
    try{
        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // data forgiven id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message: "No Data found with Given Id",
            })
        }
        // data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${todo} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message: "Server Error",
        });
    }
}