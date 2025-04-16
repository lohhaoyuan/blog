import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'suou (dot) dev',
  description:
    'collection of thoughts',
  href: 'https://suou.vercel.app',
  author: 'haoyuan',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href:'/',
    label: 'home',
  }
  // ,{
  //   href: '/about',
  //   label: 'about',
  // },
  // {
  //   href: '/portfolio',
  //   label: 'portfolio',
  // },
  // {
  //   href: '/now',
  //   label: 'now',
  // }
  ,{
    href: '/blog',
    label: 'blog',
  },

 
  
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
 
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/lohhaoyuan',
    label: 'GitHub',
  },
  {
    href: 'mailto:haoyuan@mitaka.dev',
    label: 'Email',
  },{
    href:"https://instagram.com/haoyua.n",
    label: 'Instagram',
  },
  {
    href:"/rss.xml",
    label: 'RSS',
  }

]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Instagram : 'lucide:instagram',

  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
