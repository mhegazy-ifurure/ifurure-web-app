import { LINK_FIELDS } from './link'
import { MEDIA } from './media'

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  position
  ${MEDIA}
}
`
export const MEDIA_CONTENT = `
...on MediaContent {
  blockType
  content {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
  ${MEDIA}
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
      }
      ...on Project {
        id
        slug
        title
      }
      ...on Service {
        id
        slug
        title
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
       
      }
      ...on Project {
        id
        slug
        title
       
      }

    }
  }
  populatedDocsTotal
}
`
