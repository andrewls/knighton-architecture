// This class exists _purely_ for purposes of being able to optimize
// which version of a photo gets loaded based on the device that is
// viewing the photo.
import Photos from 'images';

class PhotoResolver {
  static resolve(path) {
    const keys = path.split('/');
    let object = Photos;
    let nextKey;
    while(nextKey = keys.shift()) {
      object = object[nextKey];
    }
    return object;
  }
}

export default PhotoResolver;
