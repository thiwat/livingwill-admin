import Detail from "@/components/Detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const UserDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ full_name }'}
      entity={Entity.user}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'TRest',
    fields: []
  }
]

export default UserDetail