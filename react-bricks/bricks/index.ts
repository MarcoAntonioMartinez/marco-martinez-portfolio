import { types } from 'react-bricks/rsc'

import HeroUnit from './custom/MyHeroUnit'

// import RegisterBrick from './custom/RegisterBrick/RegisterBrick'
import reactBricksUITheme from './react-bricks-ui'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit], // Custom Bricks
      },
    ],
  },
]

// const bricks = [HeroUnit]

export default bricks
