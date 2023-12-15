export type PageProps<T = Record<string | number, unknown>> = T & {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
