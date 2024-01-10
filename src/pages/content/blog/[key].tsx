import Detail from "@/components/Detail"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const BlogDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.blog}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'blog_general_information',
    fields: [
      {
        label: 'blog_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'blog_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'blog_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'blog_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'blog_content_information',
    fields: [
      {
        label: 'blog_title',
        name: 'title',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'blog_tags',
        name: 'tags',
        type: DetailItemType.tags,
        required: true,
        options: {
          entity: Entity.blog
        }
      },
      {
        label: 'blog_thumbnail_image',
        name: ['thumbnail_image', 'url'],
        type: DetailItemType.attachment,
        required: true,
        options: {
          accept: 'image/*'
        }
      },
      {
        label: 'blog_position',
        name: 'position',
        type: DetailItemType.number,
        required: true,
      },
      {
        label: 'blog_content',
        name: 'content',
        type: DetailItemType.wysiwyg,
        dependenciesFields: ['type'],
        required: true,
        span: 24
      }
    ]
  }
]

export default BlogDetail