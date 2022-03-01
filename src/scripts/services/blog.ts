// import Cookies from 'js-cookie'
import { notify } from '@kyvg/vue3-notification'

import i18n from '@/config/i18n'
import axios from '@/config/axios'
import { User } from '@/types/user'
import { Post } from '@/types/blog'

class BlogService {
  async Publish(user: User, title: string, post: string): Promise<void> {
    const postObj: Post = {
      Title: title,
      Content: post,
      Date: new Date(Date.now()).toString(),
      UserID: user._id!,
    }

    try {
      await axios.post(`/blog/publish/${user?.Login}`, postObj)

      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.blog.publish.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.blog.publish.didnt'),
      })
    }
  }
}

export default new BlogService()
