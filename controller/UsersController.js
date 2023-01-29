 import User from "../models/UsersModel.js";

export const getUsers = async(req, res) => {
  try {
    const respon = await User.findAll();
    res.status (200).json(respon)
  }
  catch (error) {
    console.log (error.message);
  }

}

export const getById = async(req, res) => {
  try {
    const respon = await User.findOne({
        where:{
          id: req.params.id
        }
    });
    res.status (200).json(respon)
  }
  catch (error) {
    console.log (error.message);
  }

}

export const postUsers = async(req, res) => {
  try {
      await User.create(req.body);
    res.status (201).json({msg:"data berhasil ditambahkan"})  //201ada yg diupdate
  }
  catch (error) {
    console.log (error.message);
  }
} 
export const UpdateUsers = async(req, res) => {
  try {
      await User.update(req.body, {
        where:{
          id: req.params.id
        }
      }) 
    res.status (200).json({msg:"data berhasil diubah"})  //201ada yg diupdate
  }
  catch (error) {
    console.log (error.message);
  }
}

export const deletUsers = async(req, res) => {
  try {
      await User.destroy ( {
        where:{
          id: req.params.id
        }
      } )
    res.status (200).json({msg:"data berhasil dihapus"})  //201ada yg diupdate
  }
  catch (error) {
    console.log (error.message);
  }
}





// let users = [
//     {id: 1, nama : 'ude', email:'hsjqhjdh'},
//     {id: 2, nama : 'ris', email:'rise'}
//   ]


// module.exports ={
//   index: (req, res) => {
//         if(users.length > 0) {
//             res.json ({
//             status : true,
//             data : users,
//             method : req.method,
//             url : req.url
//             }) 
//         } else {
//             res.json({
//             status : false,
//             massage : 'data user masih kosong'

//             })
//         }
//     },
//     store: (req, res) => {
//         users.push(req.body)
//           res.send ({
//             status : true,
//             data : users,
//             massage : 'data user berhasil',
//             method : req.method,
//             url : req.url
//           }) 
        
//       },
//       update: (req, res) => {
//         const id = req.params
//         users.filter(user => {
//           if(user.id == id) {
//             user.id = id
//             user.nama = req.body.nama
//             user.email = req.body.email
              
//             return user
//           }
//         })
//           res.json({
//             status : true,
//               data : users,
//               massage : 'data user diedit',
//               method : req.method,
//               url : req.url
//           })
//       },
//       delete:(req, res)=> {
//         let id = req.params
//         users= users.filter(user => user.id != id) // jika user.id tidak sama dgn id
//         res.send ({
//           status : true,
//               data : users,
//               massage : 'data user berhasi dihapusl',
//               method : req.method,
//               url : req.url
//         })
//       }

// }
