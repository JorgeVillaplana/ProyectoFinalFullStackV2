import { Image } from './image.model';
import { PostDetail } from './postdetail.model';

export class Post {
  details?: Array<PostDetail>;
  image?: Image;
  important?: boolean;
  updatedAt?: Date;
  _id?: string;
}
