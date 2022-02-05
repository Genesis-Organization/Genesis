import Cookies from 'js-cookie'
import { notify } from '@kyvg/vue3-notification'

import i18n from '@/config/i18n'
import axios from '@/config/axios'
import { User, ResearchInterest } from '@/types/user'

class SettingsService {
  async changeDesc(user: User): Promise<void> {
    try {
      await axios.put(`/users/${user?.Login}/desc`, {
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

  async changeInterests(user: User): Promise<void> {
    const levels: { [key: string]: number } = {
      beginner: 1,
      intermediate: 2,
      advanced: 3,
      expert: 4,
      master: 5,
      visionary: 6,
    }
    try {
      await axios.put(`/users/${user?.Login}/interests`, {
        token: Cookies.get('jwt'),
        interests: user.researchInterests?.sort(
          (a: ResearchInterest, b: ResearchInterest) =>
            levels[b.level as string] - levels[a.level as string]
        ),
      })
      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.user.interests.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.interests.didnt'),
      })
    }
  }

  async changeEducation(user: User): Promise<void> {
    try {
      await axios.put(`/users/${user?.Login}/education`, {
        token: Cookies.get('jwt'),
        education: user.education,
      })
      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.user.education.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.education.didnt'),
      })
    }
  }

  async changeName(user: User, password: string): Promise<void> {
    try {
      await axios.put(`/users/${user?.Login}/name`, {
        token: Cookies.get('jwt'),
        name: user.Name,
        surname: user.Surname,
        password,
      })
      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.user.name.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.name.didnt'),
      })
    }
  }

  async changeEmail(user: User, password: string): Promise<void> {
    try {
      await axios.put(`/users/${user?.Login}/email`, {
        token: Cookies.get('jwt'),
        email: user.Email,
        password,
      })
      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.user.email.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.email.didnt'),
      })
    }
  }

  async changeDOB(user: User, password: string): Promise<void> {
    try {
      await axios.put(`/users/${user?.Login}/dateofbirth`, {
        token: Cookies.get('jwt'),
        DateOfBirth: user.DateOfBirth,
        password,
      })
      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.user.dob.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.dob.didnt'),
      })
    }
  }

  async changePassword(
    user: User,
    oldpass: string,
    newpass: string,
    confirmpass: string,
    strength: number
  ): Promise<void> {
    if (newpass != confirmpass) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.password.must_be_same'),
      })
      return
    }
    if (strength < 50 || newpass.length < 6) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.password.too_weak'),
      })
      return
    }

    try {
      await axios.put(`/users/${user?.Login}/dateofbirth`, {
        token: Cookies.get('jwt'),
        oldPass: oldpass,
        newPass: newpass,
      })
      notify({
        type: 'success',
        title: i18n.global.t('notifications.types.succes'),
        text: i18n.global.t('notifications.text.user.password.done'),
      })
    } catch (e) {
      notify({
        type: 'error',
        title: i18n.global.t('notifications.types.error'),
        text: i18n.global.t('notifications.text.user.password.didnt'),
      })
    }
  }
}

export default new SettingsService()
