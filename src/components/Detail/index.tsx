import useDetail from "@/services/detail"
import { t } from "@/utils/translate"
import { Button } from "antd"
import PageHeader from "../PageHeader"
import { DetailProps } from "./types"

const Detail = ({
  title,
  sections,
  entity,
  keyData
}: DetailProps) => {

  const { displayTitle } = useDetail({
    entity,
    keyData,
    title
  })

  return (
    <>
      <PageHeader
        title={displayTitle}
        extra={[
          <Button
            type={'primary'}
          >
            {t('common_save_button')}
          </Button>
        ]}
      />
    </>
  )
}

export default Detail