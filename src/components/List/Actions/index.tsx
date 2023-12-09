import { Button } from "antd"
import { ListActionsProps } from "./types"
import { FileTextOutlined } from '@ant-design/icons'
import Link from "next/link"
import { usePathname } from "next/navigation"

const ListActions = ({ rowId }: ListActionsProps) => {

  const pathname = usePathname()

  return (
    <Link href={`${pathname}/[key]`} as={`${pathname}/${rowId}`}>
      <Button icon={<FileTextOutlined />} />
    </Link>
  )
}

export default ListActions