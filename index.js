const express=require("express")
const app=express()


app.post("/register", logger, (req,res)=>{
    return res.send({"firstName":"riyaz","lastName":"Ahmad","age":24,"email":"xyz@gmail.com","profileImages":"1234.jpg","timestamps":"10:05"})
})


app.post("/book",logger,(req,res)=>{
    return res.send({"likes":"190","coverImage":"newImage.jpg","content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ","timestamps":"10:10am"})
})

app.post("/PublicationModel",logger,(req,res)=>{
    return res.send({"name":"riyaz","timestamps":"10:15pm"})
})

app.post("/CommentModel",logger,(req,res)=>{
    return res.send({"body":"internal body","timestamps":"10:17am"})
})


function logger(req,res,next){
    console.log("first logger")
    next()
    console.log("second logger")
}

app.listen(2909,()=>{
    console.log("listenig to the port 2909")
})
