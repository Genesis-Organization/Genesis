import Cookies from 'js-cookie'
import { notify } from '@kyvg/vue3-notification'

import i18n from '@/config/i18n'
import axios from '@/config/axios'
import { User } from '@/types/user'
import { Post } from '@/types/blog'

class BlogService {
  async sendPost(user: User, post: Post): Promise<void> {
    console.log(user, post)
  }
}

export default new BlogService()
