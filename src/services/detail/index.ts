import { requestDetail } from "@/apis/client/entity"
import { useBreadcrumbState } from "@/atoms/breadcrumb"
import { compileTemplate } from "@/utils/template"
import { useRequest } from "ahooks"
import { useEffect } from "react"
import { DetailServiceProps } from "./types"

const useDetail = ({
  title,
  entity,
  keyData
}: DetailServiceProps) => {

  const [breadcrumb, setBreadcrumb] = useBreadcrumbState()

  const request = useRequest(requestDetail, {
    manual: true,
    onSuccess: (r) => {
      if (title) {
        const compiledTitle = compileTemplate(title, r)
        setBreadcrumb(compiledTitle)
      }
    }
  })

  useEffect(() => {
    if (keyData) {
      request.run({
        entity,
        id: keyData
      })
    }
  }, [])

  return {
    displayTitle: breadcrumb
  }
}

export default useDetail