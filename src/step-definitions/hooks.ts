import { Before, After } from '@wdio/cucumber-framework';
import { readFileSync } from 'node:fs';
import FormData from 'form-data';
import fetch from 'node-fetch';

Before({ tags: '@sampleFileUpload' }, async function () {
  const formData = new FormData();
  const fileBuffer = readFileSync('./src/test-data/sample-file.csv');
  formData.append('file', fileBuffer, {
    contentType: 'text/csv',
    filename: 'sample-file.csv'
  });

  await fetch('https://aist.lab.epam.com/api-assure/api/file/', {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.USER_WITH_PERMISSIONS}`,
      ...formData.getHeaders()
    },
    body: formData
  })
});

After({ tags: '@allFilesDelete' }, async function () {
  interface GetResponseBody {
    files: string[];
  }
  const getResponse = await fetch('https://aist.lab.epam.com/api-assure/api/file/', {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${process.env.USER_WITH_PERMISSIONS}`,
    },
  });
  const getResponseBody = await getResponse.json() as GetResponseBody;
  const uploadedFiles = getResponseBody.files;
  for (const file of uploadedFiles) {
    await fetch(`https://aist.lab.epam.com/api-assure/api/file/${file}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${process.env.USER_WITH_PERMISSIONS}`,
      },
    })
  }
});