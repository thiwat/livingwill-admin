import Detail from "@/components/Detail"
import { CmsBlockType } from "@/enums/cms"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { SectionProps } from "@/types/detail"
import { t } from "@/utils/translate"
import { useParams } from "next/navigation"

const CmsBlockDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.cms_block}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'cms_block_general_information',
    fields: [
      {
        label: 'cms_block_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'cms_block_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_block_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_block_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'cms_block_content_information',
    fields: [
      {
        label: 'cms_block_type',
        name: 'type',
        type: DetailItemType.select,
        required: true,
        options: {
          options: Object.values(CmsBlockType).map(i => ({
            label: t(`cms_block_type_${i}`),
            value: i
          }))
        }
      },

      {
        label: 'cms_block_image',
        name: ['content', 'image', 'url'],
        type: DetailItemType.attachment,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.image,
        required: ({ values }) => values?.type === CmsBlockType.image,
        options: {
          path: 'cms_block',
          accept: 'image/*'
        }
      },
      {
        label: 'cms_block_html',
        name: ['content', 'html'],
        type: DetailItemType.wysiwyg,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.html,
        required: ({ values }) => values?.type === CmsBlockType.html,
        span: 24
      },
      {
        label: 'cms_block_autoplay',
        name: ['content', 'autoplay'],
        type: DetailItemType.boolean,
        hidden: ({ values }) => values?.type !== CmsBlockType.carousel,
      },
      {
        label: 'cms_block_images',
        name: ['content', 'images'],
        type: DetailItemType.addable,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.carousel,
        required: ({ values }) => values?.type === CmsBlockType.carousel,
        options: {
          allowDrag: true,
          listLayout: [
            {
              type: ListItemType.image,
              title: 'cms_block_image',
              dataIndex: 'url',
              key: 'url'
            }
          ],
          detailLayout: [
            {
              fields: [
                {
                  label: 'cms_block_image',
                  name: 'url',
                  type: DetailItemType.attachment,
                  dependenciesFields: ['type'],
                  required: true,
                  options: {
                    path: 'cms_block',
                    accept: 'image/*'
                  }
                },
              ]
            }
          ]
        },
        span: 24
      }
    ]
  }
]

export default CmsBlockDetail