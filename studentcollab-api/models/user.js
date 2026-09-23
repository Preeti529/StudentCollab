import mongoose from "mongoose";

const userSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    skills: [String],

  experience: { 
    type: String,
     default: "Beginner"
     },
  interests: {
     type: String
     },
  availability: { 
    type: String, 
    default: "Part-time"
 },
  rating: {
     type: Number,
      default: 0 
    },
  createdAt: {
     type: Date, 
     default: Date.now },
});


// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);