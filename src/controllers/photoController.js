import multer from "multer";
import multerconfig from '../config/multer';

const upload = multer(multerconfig).single('photo');

class PhotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
