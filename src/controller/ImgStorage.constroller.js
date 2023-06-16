// Import functions for use storage firebase
import { ref, uploadBytes, listAll, deleteObject, getDownloadURL } from "firebase/storage";
import { storage }from "../model/firebase.config.js";

export const uploadImage = async (req, res) => {
    const file = req.file;
    const imgRef = ref(storage, `img/${file.originalname}`);
    const metatype = { contentType: file.mimetype, name: file.originalname };
    await uploadBytes(imgRef, file.buffer, metatype)
      .then((snapshot) => {
        res.send("uploaded!");
        console.log(imgRef, metatype);
      })
      .catch((error) => console.log(error.message));
  };
  
  export const getAllImg = async (req, res) => {
    const imgsRef = ref(storage, 'img');
    try {
      const respuesta = await listAll(imgsRef);
      const urls = [];
      for (let item of respuesta.items){
        const url = await getDownloadURL(item);
        urls.push({url: url, name: item._location.path_});
      }
      res.json(urls);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: message });
    }
  }

  export const deletedImg = async (req, res) => {
    const deletePic = req.body.name;
    const deleteRef = ref(storage, deletePic);
    await deleteObject(deleteRef)
        .then(() => res.status(200).send("deleted!"))
        .catch(() => console.log(error));
  }