type RecaptchaSetting = {
  enabled: boolean;
  site_key: string;
}

export type Settings = {
  recaptcha?: RecaptchaSetting
}