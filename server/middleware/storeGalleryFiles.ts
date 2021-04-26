const multer = require('multer');
import { v4 as uuidv4 } from 'uuid';

// Setup multer for CV file
const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
        callback(null, './static/upload/images');
    },
    filename: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
        const guId = uuidv4();
        callback(null, `${guId}_${file.originalname}`)
    }
})

// Filter extensions
const arrOfExtensions: string[] = ['image/jpeg', 'image/png', 'image/jpg']

const fileFilter = (req: Request, file: Express.Multer.File, callback: (error: Error | null, check?: boolean) => void) => {
    if (!arrOfExtensions.includes(file.mimetype)) {
        callback(null, false);
        return callback(new Error('Only .png, .jpeg, .jpg'))
    } else {
        callback(null, true);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
