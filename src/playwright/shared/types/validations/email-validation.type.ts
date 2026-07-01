export type EmailValidationType =
  | 'missing_email'
  | 'missing_at'
  | 'missing_before_at'
  | 'missing_after_at'
  | 'invalid_domain_char';