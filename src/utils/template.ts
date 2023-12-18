import _template from 'lodash/template'

export const compileTemplate = (template: string, data: object) => {
  return _template(template)(data)
}