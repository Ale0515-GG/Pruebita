import mongoose from "mongoose";


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombreUsuario: String,
    usuario: String,
    contrasena: String,
    apellidoP: String,
    apellidoM: String,
    correo: String,
}, {
    timestamps: true
});


const UserModel = mongoose.model("usuarios", UserSchema);

export default UserModel;
