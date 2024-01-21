import { useState } from "react"
import { EMAIL_TEMPLATES, LINE_TEMPLATES } from '@/constants/templates'
import { NotificationTemplateTabProps } from "./types"
import styles from './index.module.css'
import { PRIMARY_COLOR } from "@/constants/colors"
import { t } from "@/utils/translate"
import { FormItem } from "../Form"
import { Col, Input, Row, Switch, Typography } from "antd"
import TranslateModal from "../TranslateModal"
import { DetailItemType } from "@/enums/detail"
import WysiwygEditor from "../Wysiwyg"

const NotificationTemplateTab = ({
  type,
}: NotificationTemplateTabProps) => {

  const templates = type === 'email'
    ? EMAIL_TEMPLATES
    : LINE_TEMPLATES

  const [active, setActive] = useState<string>(templates[0])

  const _onChange = (item) => () => {
    setActive(item)
  }

  const name = type === 'email'
    ? 'email_templates'
    : 'line_templates'

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {templates.map(i => (
          <div
            key={i}
            style={{ borderRightColor: active === i ? PRIMARY_COLOR : 'white' }}
            className={styles.item}
            onClick={_onChange(i)}
          >
            {t(`template_${i}`)}
          </div>
        ))}
      </div>
      <Row className={styles.formContainer}>
        <Row justify={'space-between'} className={styles.titleRow} align={'middle'}>
          <div>
            <Typography.Title level={3} className={styles.title}>
              {t(`template_${active}`)}
            </Typography.Title>
            <Typography.Text type={'secondary'}>
              {t(`template_${active}_description`)}
            </Typography.Text>
          </div>
          <FormItem
            name={[name, active, 'enabled']}
            valuePropName="checked"
            required
          >
            <Switch />
          </FormItem>
        </Row>
        {type === 'email' &&
          <div className={styles.contentContainer}>
            <Col span={24}>
              <FormItem
                name={['email_templates', active, 'title']}
                label={t('template_email_title')}
                required
              >
                <Input
                  addonAfter={
                    <TranslateModal
                      name={['email_templates', active, 'title']}
                      type={DetailItemType.string}
                      label={t('template_email_title')}
                    />
                  }
                />
              </FormItem>
            </Col>
            <Col span={24}>
              <TranslateModal
                name={['email_templates', active, 'body']}
                type={DetailItemType.wysiwyg}
                label={t('template_email_body')}
              />
              <FormItem
                name={['email_templates', active, 'body']}
                label={t('template_email_body')}
                required
                preserve
              >
                <WysiwygEditor />
              </FormItem>
            </Col>
          </div>
        }
        {type === 'line' &&
          <div className={styles.contentContainer}>
            <Col span={24}>
              <FormItem
                name={['line_templates', active, 'message']}
                label={t('template_line_message')}
                required
              >
                <Input
                  addonAfter={
                    <TranslateModal
                      name={['line_templates', active, 'message']}
                      type={DetailItemType.string}
                      label={t('template_line_message')}
                    />
                  }
                />
              </FormItem>
            </Col>
          </div>
        }
      </Row>
    </div>
  )
}

export default NotificationTemplateTab