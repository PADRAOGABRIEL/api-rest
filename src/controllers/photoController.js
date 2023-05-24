import multer from "multer";
import multerconfig from '../config/multer';
import Photo from "../models/Photo";

const upload = multer(multerconfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const photo = await Photo.create({ originalname, filename });

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
