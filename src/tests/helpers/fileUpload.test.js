import { fileUpload } from '../../helpers/fileUpload';
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: 'balamcode',
    api_key: '998313355257568',
    api_secret: 'J-s7xw5rYj0ZuM9Y26oyWU0hzak',
});

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el URL', async() => {
        const resp = await fetch(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png'
        );
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // ? borrar imagen
        const segments = url.split('/');
        const imgId = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(imgId);
        
    });

    test('Debe de retornar un error', async () => {
        const file = new File([], 'foto.png');

        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});
