import { startServer } from 'deja-view';

var config = {
    customPicturesLocation: 'D:/pictures',
    pictureDisplayTimeMs: 7 * 1000,
    steinbockJobCount: 3
};
startServer(config);