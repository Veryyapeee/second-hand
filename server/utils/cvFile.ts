const multer = require('multer');
import { v4 as uuidv4 } from 'uuid';

// Setup multer for CV file
const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
        callback(null, './static/upload/cv');
    },
    filename: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
        const guId = uuidv4();
        callback(null, `${guId}_${file.originalname}`)
    }
})

// Filter extensions
const fileFilter = (req: Request, file: Express.Multer.File, callback: any) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'application/pdf' && file.mimetype !== 'image/png' && file.mimetype !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && file.mimetype !== 'image/jpg') {
        callback(null, false);
        return callback(new Error('Only .png, .jpeg, .jpg, .png, .docx'))
    } else {
        callback(null, true);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
