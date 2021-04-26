import fs from 'fs';
import util from 'util';

const unlink: (path: any) => any = util.promisify(fs.unlink);

export default unlink;