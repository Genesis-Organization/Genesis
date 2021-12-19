import Cookies from 'js-cookie'
import { notify } from '@kyvg/vue3-notification'

import i18n from '@/config/i18n'
import axios from '@/config/axios'
import { User } from '@/types/user'

export const changeDesc = async (user: User): Promise<void> => {
  try {
    await axios.put(`/users/desc/${user?.Login}`, {
      token: Cookies.get('jwt'),
      description: user.description,
    })
    notify({
      type: 'success',
      title: i18n.global.t('notifications.types.succes'),
      text: i18n.global.t('notifications.text.user.description.done'),
    })
  } catch (e) {
    notify({
      type: 'error',
      title: i18n.global.t('notifications.types.error'),
      text: i18n.global.t('notifications.text.user.description.didnt'),
    })
  }
}
