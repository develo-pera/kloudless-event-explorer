import { join } from 'path';
import { config } from 'dotenv-safe';

config({
  allowEmptyValues: false,
  path: join(__dirname, '..', '.env'),
  sample: join(__dirname, '..', '.env.example')
});

export default {
  env: process.env.NODE_ENV,
  kloudless: {
    apiKey: process.env.KLOUDLESS_API_KEY,
    applicationId: process.env.KLOUDLESS_APP_ID,
    uploadAccountId: process.env.KLOUDLESS_UPLOAD_ACCOUNT_ID,
    uploadRootFolderId: process.env.KLOUDLESS_UPLOAD_ROOT_FOLDER_ID,
    uploadRootFolderName: `linq-${process.env.STAGE}-uploaded-documents/`
  }
}
