import { sleep } from 'k6';
import { options } from '../config/options.js';
import { getPosts } from '../services/postsService.js';
import { validateResponse } from '../utils/checks.js';

export { options };

export default function () {

  const res = getPosts();

  validateResponse(res);

  sleep(1);

}