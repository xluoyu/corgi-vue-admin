import { Get } from '@/utils/axios'

export const GetYiYan = () => {
  return Get({
    url: 'https://v1.hitokoto.cn',
    data: {
      c: 'a',
    },
  })
}
